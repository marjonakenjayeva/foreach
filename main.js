const narsa = ["ruchka", "qalam", "daftar", "olma", "nok", "marker", "gul", "olmos", "oltin", "kumush"]

const m_bor = []
const m_yoq = []

narsa.forEach((item) => {
 if(item.includes("m")){
    m_bor.push(item)
 }
 else{
    m_yoq.push(item)
 }
})

console.log(m_bor)
console.log(m_yoq)