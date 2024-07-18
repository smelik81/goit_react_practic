import { useDispatch, useSelector } from "react-redux";
import { deposit } from "../redux/store";
import { withdraw } from "../redux/store";

export default function Balance() {
  const credits = useSelector((state) => state.balance.value);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(deposit(20));
  };
  const handleithdraw = () => {
    dispatch(withdraw(5));
  };

  return (
    <div>
      <p>Balance: {credits} credits</p>
      <hr />
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleithdraw}>Withdraw credits</button>
    </div>
  );
}
