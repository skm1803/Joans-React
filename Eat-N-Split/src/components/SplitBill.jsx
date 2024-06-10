

export default function SplitBill() {
    return (
        <form className="form-split-bill">
            <h2>Split Bill</h2>
            <label htmlFor="bill-amount">💰 Bill Value</label>
            <input type="text" id="bill-amount" />
            <label htmlFor=" Your Expense">🧍‍♂️ Your Expense</label>
            <input type="text" id="Your Expense" />
            <label htmlFor="friends">🧍‍♀️Friends Expense</label>
            <input type="text" id="friends" />
            <label htmlFor="payment-done-by">🤑Who is paying the Bill</label>
            <select id="payment-done-by">
                <option value="you">You</option>
                <option value="friend">Friend</option>  
            </select>
            <button className="button">Split</button>
        
        </form>
    );
}