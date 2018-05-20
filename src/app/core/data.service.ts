import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor( private http: Http) { }

  getArticlesData() {
    return this.articles;
  }

    articles: Array<object> = [
      {
        "id": 1,
        "articleTitle": "Kargalar çok zeki ama nedenini biliyor muyuz?",
        "articleMadeDate": "30/04/2018",
        "articleAuthor": "Meltem Çetin Sever",
        "articleEditor": "Ayşegül Şenyiğit",
        "articlePictures": {
            "articleMainPicture": "https://evrimagaci.org/public/uploads/images/karga_1.jpg"
        },
        "articleSources": [
            "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
            "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
            "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
        ],
        "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    },
    {
        "id": 2,
        "articleTitle": "Nobel Ödüllü Bilim İnsanları ''Yaratılış Bilimi''ne Karşı Birleşti! (1986, Science) ",
        "articleMadeDate": "01/05/2018",
        "articleAuthor": "Meltem Çetin Sever",
        "articleEditor": "Ayşegül Şenyiğit",
        "articlePictures": {
            "articleMainPicture": "https://evrimagaci.org/public/uploads/images/Evrimsel%20Biyoloji%20Albumu/1200px-CreaciAn_de_AdAn_Miguel_Angel.jpg"
        },
        "articleSources": [
            "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
            "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
            "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
        ],
        "articleContent": "Dünya'nın en önde gelen bilim dergisi olan Science'ın 29 Ağustos 1986 tarihli başlığı, aynen böyle diyor: Nobel Ödüllü Bilim İnsanları ''Yaratılış Bilimi''ne Karşı Birleşti! Aynı görüşü paylaşan 2 Nobel Ödüllü bilim insanını bulmanız bile zordur. Ancak Caltech fizikçisi Murray Gell-Mann, 18 Ağustos 1986'da ABD Anayasa Mahkemesi'ne sunulan hukuki bir bildiri özetine 72 Nobel Ödüllü bilim insanının imza atmasını sağlamayı başarmıştır. Bu bildiride, ABD'nin Louisiana Eyaleti'nde geçirilen ve devlet okullarında 'yaratılış biliminin' evrim ile eşit miktarda okutulmasını zorunlu kılan bir yasanın reddedilmesi gerektiği savunulmaktadır. 1981 yılında geçirilen yasa, bir federal mahkeme tarafından zaten anayasaya aykırı olarak görülmüştür. Mahkeme, yasanın ABD'nin düşünce ve ifade özgürlüğü ile ilgili birinci yasasını çiğnediğini, devletin dini inançların reklamını yapamayacağını söylemiştir. Temyize giden davada, 3 kişiden oluşan bir mahkeme heyeti, alt mahkemenin kararını onamıştır. Bu kararı da temyize götüren kişiler, bir üst mahkemede de 8'e karşı 7 oy ile davayı kaybetmişlerdir. 5 Mayıs 1986'da ise, en üst merci olan Anayasa Mahkemesi davayı görmeyi kabul etmiştir."
    },
    {
        "id": 3,
        "articleTitle": "Bilim İnsanlarının veya Evrimsel Biyologların Çoğu Ateist midir?",
        "articleMadeDate": "30/04/2018",
        "articleAuthor": "Meltem Çetin Sever",
        "articleEditor": "Ayşegül Şenyiğit",
        "articlePictures": {
            "articleMainPicture": "https://evrimagaci.org/public/uploads/images/Bilim%20Felsefesi%20ve%20Metodolojisi/biliminanc.jpg"
        },
        "articleSources": [
            "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
            "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
            "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
        ],
        "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    },
    {
        "id": 4,
        "articleTitle": "Genetik Kodun Evrimi: Bütün Canlılar Neden Aynı Genetik Kodu Kullanıyorlar?",
        "articleMadeDate": "30/04/2018",
        "articleAuthor": "Meltem Çetin Sever",
        "articleEditor": "Ayşegül Şenyiğit",
        "articlePictures": {
            "articleMainPicture": "https://evrimagaci.org/public/uploads/statics/056899b38ef57bbb05e754cb6da3a217.jpeg"
        },
        "articleSources": [
            "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
            "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
            "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
        ],
        "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    },
    {
        "id": 5,
        "articleTitle": "Kargalar çok zeki ama nedenini biliyor muyuz?",
        "articleMadeDate": "30/04/2018",
        "articleAuthor": "Meltem Çetin Sever",
        "articleEditor": "Ayşegül Şenyiğit",
        "articlePictures": {
            "articleMainPicture": "https://evrimagaci.org/public/uploads/images/karga_1.jpg"
        },
        "articleSources": [
            "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
            "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
            "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
        ],
        "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    },
    {
        "id": 6,
        "articleTitle": "Kargalar çok zeki ama nedenini biliyor muyuz?",
        "articleMadeDate": "30/04/2018",
        "articleAuthor": "Meltem Çetin Sever",
        "articleEditor": "Ayşegül Şenyiğit",
        "articlePictures": {
            "articleMainPicture": "https://evrimagaci.org/public/uploads/images/karga_1.jpg"
        },
        "articleSources": [
            "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
            "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
            "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
        ],
        "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    }
    // {
    //     "id": 7,
    //     "articleTitle": "Kargalar çok zeki ama nedenini biliyor muyuz?",
    //     "articleMadeDate": "30/04/2018",
    //     "articleAuthor": "Meltem Çetin Sever",
    //     "articleEditor": "Ayşegül Şenyiğit",
    //     "articlePictures": {
    //         "articleMainPicture": "https://evrimagaci.org/public/uploads/images/karga_1.jpg"
    //     },
    //     "articleSources": [
    //         "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
    //         "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
    //         "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
    //     ],
    //     "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    // },
    // {
    //     "id": 8,
    //     "articleTitle": "Kargalar çok zeki ama nedenini biliyor muyuz?",
    //     "articleMadeDate": "30/04/2018",
    //     "articleAuthor": "Meltem Çetin Sever",
    //     "articleEditor": "Ayşegül Şenyiğit",
    //     "articlePictures": {
    //         "articleMainPicture": "https://evrimagaci.org/public/uploads/images/karga_1.jpg"
    //     },
    //     "articleSources": [
    //         "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
    //         "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
    //         "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
    //     ],
    //     "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    // },
    // {
    //     "id": 9,
    //     "articleTitle": "Kargalar çok zeki ama nedenini biliyor muyuz?",
    //     "articleMadeDate": "30/04/2018",
    //     "articleAuthor": "Meltem Çetin Sever",
    //     "articleEditor": "Ayşegül Şenyiğit",
    //     "articlePictures": {
    //         "articleMainPicture": "https://evrimagaci.org/public/uploads/images/karga_1.jpg"
    //     },
    //     "articleSources": [
    //         "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
    //         "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
    //         "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
    //     ],
    //     "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    // },
    // {
    //     "id": 10,
    //     "articleTitle": "Kargalar çok zeki ama nedenini biliyor muyuz?",
    //     "articleMadeDate": "30/04/2018",
    //     "articleAuthor": "Meltem Çetin Sever",
    //     "articleEditor": "Ayşegül Şenyiğit",
    //     "articlePictures": {
    //         "articleMainPicture": "https://evrimagaci.org/public/uploads/images/karga_1.jpg"
    //     },
    //     "articleSources": [
    //         "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
    //         "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
    //         "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
    //     ],
    //     "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    // },
    // {
    //     "id": 11,
    //     "articleTitle": "Kargalar çok zeki ama nedenini biliyor muyuz?",
    //     "articleMadeDate": "30/04/2018",
    //     "articleAuthor": "Meltem Çetin Sever",
    //     "articleEditor": "Ayşegül Şenyiğit",
    //     "articlePictures": {
    //         "articleMainPicture": "https://evrimagaci.org/public/uploads/images/karga_1.jpg"
    //     },
    //     "articleSources": [
    //         "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
    //         "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
    //         "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
    //     ],
    //     "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    // },
    // {
    //     "id": 12,
    //     "articleTitle": "Kargalar çok zeki ama nedenini biliyor muyuz?",
    //     "articleMadeDate": "30/04/2018",
    //     "articleAuthor": "Meltem Çetin Sever",
    //     "articleEditor": "Ayşegül Şenyiğit",
    //     "articlePictures": {
    //         "articleMainPicture": "https://evrimagaci.org/public/uploads/images/karga_1.jpg"
    //     },
    //     "articleSources": [
    //         "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
    //         "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
    //         "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
    //     ],
    //     "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    // },
    // {
    //     "id": 13,
    //     "articleTitle": "Kargalar çok zeki ama nedenini biliyor muyuz?",
    //     "articleMadeDate": "30/04/2018",
    //     "articleAuthor": "Meltem Çetin Sever",
    //     "articleEditor": "Ayşegül Şenyiğit",
    //     "articlePictures": {
    //         "articleMainPicture": "https://evrimagaci.org/public/uploads/images/karga_1.jpg"
    //     },
    //     "articleSources": [
    //         "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
    //         "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
    //         "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
    //     ],
    //     "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    // },
    // {
    //     "id": 14,
    //     "articleTitle": "Kargalar çok zeki ama nedenini biliyor muyuz?",
    //     "articleMadeDate": "30/04/2018",
    //     "articleAuthor": "Meltem Çetin Sever",
    //     "articleEditor": "Ayşegül Şenyiğit",
    //     "articlePictures": {
    //         "articleMainPicture": "https://evrimagaci.org/public/uploads/images/karga_1.jpg"
    //     },
    //     "articleSources": [
    //         "http://nautil.us/issue/40/learning/why-neuroscientists-need-to-study-the-crow",
    //         "https://cosmosmagazine.com/social-sciences/why-are-crows-so-smart",
    //         "https://www.sciencealert.com/crows-ravens-corvids-best-birds-animal-intelligence"
    //     ],
    //     "articleContent": "Kargaları diğer hayvanlarla karşılaştırdığımızda 'Ne kadar zeki hayvanlar!' diye düşünürüz. Muhteşem hafızaları ve alet kullanarak problem çözme yetenekleri bizi hayretler içinde bırakır. Biyologlara göre, zeka seviyeleri 7 yaşında bir çocuğunkine eşit olan bu kuşların beyinleri insan beyni ile karşılaştırıldığında ne tür benzerlikler ya da farklılıklara sahipler acaba? Kargalar ve zekaları herzaman merak konusu olmuştur ve bilim insanlarının kargalar üzerindeki araştırmaları devam etmektedir. Öncelikle bütün karga türleri bu kadar zeki değildir. Kargalar; kuzgun ve saksağan gibi farklı türlerin de dahil olduğu Corvus cinsine dahil olup, kargagiller (Corvidae) familyasındandır. Bu familyada yaklaşık 120 farklı tür bulunur. Kargalar ve kuzgunlar bu familyanın en zeki türleridir. Kargaların ve kuzgunların beyinleri vücut büyüklüğüne göre kıyaslanınca diğer kuşlara göre daha büyüktür. Memelilerde ise insanlar ve yunusların beyinleri büyüktür. Tabii ki, bilim insanları kargaların beyni daha büyük o yüzden daha zekidir diye kestirip atmıyor; bunun nedenini anlamak için pek çok deney ve gözlem yapıyorlar."
    // }
  ]


}
