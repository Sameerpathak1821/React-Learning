import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
}) {
  return (
    <div className="bg-white/80 p-3 rounded-lg flex items-center justify-between">
      {/* Left Side - Amount Input */}
      <div className="flex-1">
        <label className="block text-gray-700 text-sm mb-1">{label}</label>
        <input
          type="number"
          className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
        />
      </div>

      {/* Right Side - Currency Select */}
      <div className="ml-3">
        <label className="block text-gray-700 text-sm mb-1">Currency</label>
        <select
          className="px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
