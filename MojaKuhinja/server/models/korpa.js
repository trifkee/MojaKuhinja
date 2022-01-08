let korpa = null

module.exports  = class Korpa{

    static save(jelo){
        if(korpa) {

        }else{
            korpa = {
                 products:[],
                 totalPrice: 0,
            }
            korpa.qty = 1;
            korpa.products.push(jelo)
            korpa.totalPrice = jelo.cena
        }
    }

    static getKorpa() {
        return korpa
    }
}