import React ,{useState} from 'react'

export default function MainPage() {

    //States for form fields
    const [date,setDate] =useState(null);
    const [sourceCurrency,setSourceCurrency] =useState("");
    const [targetCurrency,setTargetCurrency] =useState("");
    const [amountInSourceCurrency,setAmountInSourceCurrency] =useState(0);
    const [amountInTargetCurrency,setAmountInTargetCurrency] =useState(0);


  return (
    <div>
      <h1 className=" lg:mx-32 text-5xl font-bold text-blue-400">Convert Your Currencies</h1>
      <p className="lg:mx-32 opacity-40 py-6">
      Welcome to our currency converter app! With our user-friendly interface, you can effortlessly convert currencies from around 
      the globe in just a few clicks. Whether you're traveling abroad, managing international investments, 
      or simply staying updated on exchange rates, our app provides real-time, accurate conversions. 
      Stay connected to the global economy with ease, and never miss out on favorable exchange rates again.
      </p>
   
        <div className='mt-5 flex items-center justify-center'>

            <section className=" w-full lg:w-1/2">
                <form>
                    
                    <div className="mb-5">
                        <label htmlFor={date} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        
                        <input type="Date" id={date} name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>        

                    <div className="mb-5">
                        <label htmlFor={sourceCurrency} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                        
                        <select name={sourceCurrency} id={sourceCurrency} value={sourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="AUD">AUD</option>
                            <option value="CAD">CAD</option>
                            <option value="CHF">CHF</option>
                            <option value="CNY">CNY</option>
                            <option value="HKD">HKD</option>
                            <option value="JPY">JPY</option>
                            <option value="MXN">MXN</option>
                            <option value="NZD">NZD</option>
                            <option value="SGD">SGD</option>
                            <option value="SEK">SEK</option>
                            <option value="TWD">TWD</option>
                            <option value="THB">THB</option>
                            <option value="ZAR">ZAR</option>
                        </select>
                    </div>    

                    <div className="mb-5">
                        <label htmlFor={targetCurrency} name = {targetCurrency} value={targetCurrency}
                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                        
                        <select name='' id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="AUD">AUD</option>
                            <option value="CAD">CAD</option>
                            <option value="CHF">CHF</option>
                            <option value="CNY">CNY</option>
                            <option value="HKD">HKD</option>
                            <option value="JPY">JPY</option>
                            <option value="MXN">MXN</option>
                            <option value="NZD">NZD</option>
                            <option value="SGD">SGD</option>
                            <option value="SEK">SEK</option>
                            <option value="TWD">TWD</option>
                            <option value="THB">THB</option>
                            <option value="ZAR">ZAR</option>
                        </select>
                    </div>         



                    <div className="mb-5">
                        <label htmlFor={amountInSourceCurrency} id={amountInSourceCurrency} name={amountInSourceCurrency} value={amountInSourceCurrency} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Source Currency</label>
                        
                        <input type="Number" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount in Source Currency" required />
                    </div>            
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md" >
                        Get the target currency
                    </button>
                </form>
            </section>
        </div>
    
    </div>


  );
}
