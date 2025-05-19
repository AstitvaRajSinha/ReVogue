import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

export default function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-zinc-900 shadow-md rounded-xl p-6 mt-10">
      <div className="mb-6 text-center">
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className="space-y-4 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
        <div className="flex justify-between items-center">
          <span className="font-medium">Subtotal</span>
          <span className="font-semibold">
            {currency} {subtotal}.00
          </span>
        </div>
        <div className="border-t border-zinc-300 dark:border-zinc-600" />

        <div className="flex justify-between items-center">
          <span className="font-medium">Shipping Fee</span>
          <span className="font-semibold">
            {currency} {delivery_fee}.00
          </span>
        </div>
        <div className="border-t border-zinc-300 dark:border-zinc-600" />

        <div className="flex justify-between items-center text-lg font-bold text-zinc-900 dark:text-white">
          <span>Total</span>
          <span>
            {currency} {total}.00
          </span>
        </div>
      </div>
    </div>
  );
}
