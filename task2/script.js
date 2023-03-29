const datas = [
    {
        quote:'A journey of a thousand miles begins with a single step',
        persion:'Lao Tzu'
    },
    {
        quote:'USS Princess Matoika was a transport ship for the United States Navy during World War I.',
        persion:'Shohei Ohtani'
    },
    {
        quote:'There were fifteen teams each consisting of ten cyclists in the 1962 Tour de France, for a total of 150 riders',
        persion:'Rudaki'
    },
    {
        quote:'There were fifteen teams each consisting of ten cyclists in the 1962 Tour de France, for a total of 150 riders',
        persion:'France'
    }
];

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let persion = document.querySelector('.persion');

console.log(datas.length);
console.log(Math.floor(Math.random()));
console.log(Math.random() * datas.length);

btn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * datas.length);
    quote.textContent = datas[random].quote;
    persion.textContent = datas[random].persion;
})