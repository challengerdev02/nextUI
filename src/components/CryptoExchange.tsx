import React, { useEffect, useState, useMemo } from "react";
import Select, { components } from 'react-select';

import styled from "styled-components";
import { currencyLists } from "../constants/exchange";
import axios from "axios";
import { toast } from "react-toastify";
import { useAccount, useNetwork, useSwitchNetwork, useWalletClient } from "wagmi";
import { ethers } from "ethers";
import { MdClose } from "react-icons/md";
import { CHAINS, clientToSigner } from "../constants/config";
import abiERC20 from "../constants/abi/ERC20.json"
import abiMixer from "../constants/abi/Mixer.json"

const Container = styled.div`
  width: 400px;
  padding: 20px 40px;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(31, 207, 241, 0.1) 0%,
    rgba(35, 77, 182, 0.1) 100%
  );
  box-shadow: 6px 10px 17px 0px rgba(0, 0, 0, 0.1),
    0px 4px 82.9px 0px rgba(50, 26, 64, 0.4);
`;

const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 28px;
  text-align: center;
  font: 500 24px/36px Gilroy-Light, sans-serif;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #fff;
  font: 500 20px/36px Gilroy-Light, sans-serif;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font: 500 16px Gilroy-Light, sans-serif;
`;

const RateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RateButton = styled.button`
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: linear-gradient(90deg, #c670d2 0%, #8b36d9 100%);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CoinImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const Badge = styled.span`
  text-transform: uppercase;
  padding: 1px 6px;
  color: white;
  background: grey;
  margin: 0px 5px;
  font-size: 12px;
  border-radius: 10px;
`

const customSingleValue = ({ data }: any) => (
  <div style={{ display: 'inline-flex', alignItems: 'center' }}>
    <CoinImage src={data.logo} alt={data.symbol} />
    {data.symbol}
    <Badge>{data.network}</Badge>
  </div>
)

const customOption = (props: any, sendData: any) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        cursor: 'pointer',
        borderBottom: '1px solid #ccc',
        pointerEvents: data.router === sendData.router ? "none" : "unset",
        background: data.router === sendData.router ? "#e0e0e0" : "#fff",
      }}
    >
      <CoinImage src={data.logo} alt={data.symbol} />
      {data.symbol}
      <Badge>{data.network}</Badge>
    </div>
  );
};

const CustomValueContainer = (props: any) => {
  const { children, ...rest } = props;

  return (
    <components.ValueContainer {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
        {children}
      </div>
    </components.ValueContainer>
  );
};


const CryptoExchange: React.FC = () => {
  const [sendAmount, setSendAmount] = useState(0.1);
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [rate, setRate] = useState("Floating rate");
  const [sendCurrency, setSendCurrency] = useState(currencyLists[0]);
  const [receiveCurrency, setReceiveCurrency] = useState(currencyLists[2]);

  const toggleRate = () => {
    setRate(rate === "Floating rate" ? "Fixed rate" : "Floating rate");
  };

  const handleCurrencySwap = () => {
    setSendCurrency({ ...receiveCurrency });
    setReceiveCurrency({ ...sendCurrency });
  };

  const fetchExchangeRate = async () => {
    try {
      const res = await axios.get(`https://api.coinconvert.net/convert/${sendCurrency.symbol}/${receiveCurrency.symbol}?amount=${sendAmount}`);
      setReceiveAmount(res.data[receiveCurrency.symbol])
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => { fetchExchangeRate() }, []);

  useEffect(() => {
    if (sendCurrency.symbol !== receiveCurrency.symbol && sendAmount > 0) {
      fetchExchangeRate();
    }
  }, [sendCurrency, receiveCurrency, sendAmount]);


  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const [historys, setHistorys] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { data: walletClient } = useWalletClient({ chainId: chain?.id });

  useEffect(() => {
    if (isConnected && chain && switchNetwork) {
      if (chain.id !== CHAINS[sendCurrency.router].id) {
        switchNetwork(CHAINS[sendCurrency.router].id);
      }
    }
  }, [chain, isConnected, switchNetwork, sendCurrency]);

  const signer = useMemo(() => (
    walletClient ? clientToSigner(walletClient) : null
  ), [walletClient]);

  const validateField = () => {
    if (!isConnected) {
      toast.error("Please Connect Wallet!");
      return false;
    }
    if (!Number(sendAmount) || Number(sendAmount) <= 0) {
      toast.error("Please Enter Correct Amount!");
      return false;
    }
    return true;
  }

  const startTx = async () => {
    if (!validateField()) return;
    try {
      setLoading(true);
      if (!signer) return;
      const isNative = sendCurrency.rank === 1;
      const ethBalance = await signer.getBalance()
      const tokenContract = new ethers.Contract(sendCurrency.address, abiERC20, signer)
      const tokenBalance = isNative
        ? ethBalance
        : await tokenContract.balanceOf(signer._address)
      const mixerContract = new ethers.Contract(CHAINS[sendCurrency.router].mixer, abiMixer, signer)
      const value = ethers.utils.parseUnits(sendAmount.toString(), sendCurrency.decimals)
      if (!isNative) {
        const approveTx = await tokenContract.approve(CHAINS[sendCurrency.router].mixer, value.add(value))
        await approveTx.wait();
        console.log('---------- done approve -----------------');
      }
      const [ccipFee, platformFee] = await mixerContract.getFee(
        receiveCurrency.router,
        signer._address,
        isNative ? ethers.constants.AddressZero : sendCurrency.address,
        receiveCurrency.address,
        value,
      )
      let tx = undefined
      if (isNative) {
        if (tokenBalance.lt(value.add(ccipFee).add(platformFee)))
          throw Error('Insufficient balance')
        tx = await mixerContract.transferTokensPayNative(
          receiveCurrency.router,
          signer._address,
          ethers.constants.AddressZero,
          receiveCurrency.address,
          value,
          { value: value.add(ccipFee).add(platformFee) }
        )
      } else {
        if (tokenBalance.lt(value.add(platformFee)))
          throw Error(`Insufficient ${sendCurrency.symbol} balance`)
        if (ethBalance.lt(ccipFee))
          throw Error(`Insufficient gas`)
        tx = await mixerContract.transferTokensPayNative(
          receiveCurrency.router,
          signer._address,
          sendCurrency.address,
          receiveCurrency.address,
          value,
          { value: ccipFee }
        )
      }
      if (tx) {
        const recept = await tx.wait()
        const messageId = recept.events.find((event: any) => event?.event === 'TokensTransferred')?.args.messageId.toString();
        setHistorys([...historys, messageId])
        toast.success("Successfull Submitted!");
      } else
        toast.error("Reverted");
    } catch (ex: any) {
      toast.error(ex.message);
    }
    setLoading(false);
  }

  return (
    <Container>
      <Title>Crypto Exchange</Title>
      <Label>
        You send
      </Label>
      <Row>
        <InputWrapper>
          <Input
            type="number"
            value={sendAmount}
            onChange={(e) => setSendAmount(parseFloat(e.target.value))}
          />
        </InputWrapper>
        <Select
          styles={{ container: (props) => ({ ...props, width: '40% !important' }) }}
          isSearchable={false}
          value={sendCurrency}
          onChange={(value: any) => setSendCurrency(value)}
          options={currencyLists}
          components={{ SingleValue: customSingleValue, Option: (e) => customOption(e, receiveCurrency), ValueContainer: CustomValueContainer }}
        />
      </Row>
      <Row>
        <Label>
          <RateWrapper>
            <span>{rate}</span>
            <RateButton onClick={toggleRate}>
              {rate === "Floating rate" ? "🔓" : "🔒"}
            </RateButton>
          </RateWrapper>
        </Label>
        <RateButton onClick={handleCurrencySwap}>&#x21bb;</RateButton>
      </Row>
      <Label>
        You get
      </Label>
      <Row>
        <InputWrapper>
          <Input
            type="text"
            value={receiveAmount}
            readOnly
          />
        </InputWrapper>
        <Select
          styles={{ container: (props) => ({ ...props, width: '40% !important' }) }}
          isSearchable={false}
          value={receiveCurrency}
          onChange={(value: any) => setReceiveCurrency(value)}
          options={currencyLists}
          components={{ SingleValue: customSingleValue, Option: (e) => customOption(e, sendCurrency), ValueContainer: CustomValueContainer }}
        />
      </Row>
      <Button disabled={loading} onClick={startTx}>Exchange</Button>

      {historys && historys.length &&
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "20px" }}>
          <div style={{ fontSize: "20px", color: "#fff" }}>You can check your transaction status here.</div>
          {historys.map((history, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "4px",
                border: "1px solid green",
                background: "transparent",
                padding: "10px 20px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px"
              }}>
              <a target="_blink" href={`https://ccip.chain.link/#/side-drawer/msg/${history}`} style={{ overflow: "hidden" }}>
                <p>{history}</p>
              </a>
              <MdClose style={{ color: "#fff", fontSize: 30, cursor: "pointer" }} onClick={() => setHistorys(historys.filter((one) => (one !== history)))} />
            </div>
          ))}
        </div>
      }
    </Container>
  );
};

export default CryptoExchange;
