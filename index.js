$(() => {
    $.get('https://sochain.com/api/v2/get_price/DOGE/USD', (data) => {
        let price = data.data.prices[0].price;
        $('#DOGEPRICE').text(`$${price}`);

        let profit = (price * 32);
        $('#PROFIT').text(`$${profit.toFixed(2)}`);

    });
});