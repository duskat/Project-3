const mongoose = require("mongoose");
const db = require("../models");
//const MONGODB_URI = require("../config/keys")

exports.seed = function (mongoose) {

const cardSeed = [{
        name: "The Platinum Card® from American Express",
        link: "http://refer.amex.us/DZMITP6LuB?xl=cp27",
        img: "https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/platinum-card.png",
        bonus: "60,000 Membership Rewards® points after making $5,000 in purchases within the first 3 months of Card Membership.",
        rewards: [
            "5X Membership Rewards® points on flights booked directly with airlines or with American Express Travel.",
            "5X Membership Rewards® points on eligible hotels booked on amextravel.com.",
        ],
        details: [
            "Earn 60,000 Membership Rewards® points after you use your new Card to make $5,000 in purchases in your first 3 months.",
            "Up to $200 for Uber rides annually. Credit and Uber VIP status available to Basic Card Member only.",
            "5X Membership Rewards® points on flights booked directly with airlines or with American Express Travel",
            "5X Membership Rewards® points on eligible hotels booked on amextravel.com.",
            "As a Platinum Card Member, you can enjoy access to the Global Lounge Collection, the only credit card airport lounge access program that includes proprietary lounge locations around the world.",
            "Receive complimentary benefits with an average total value of $550 with Fine Hotels & Resorts. Learn More.",
            "$200 Airline Fee Credit, up to $200 per calendar year in baggage fees and more at one qualifying airline.",
            "Get up to $100 in statement credits annually for purchases at Saks Fifth Avenue on your Platinum Card®. That's up to $50 in statement credits semi-annually. Enrollment required.",
            "$550 annual fee.",
        ],
        annualFee: "$550",
        intro: "N/A",
        aPR: "N/A",
        balanceTransfer: "N/A",
        remomended: true,
        rating: 0,
        counter: 0,
        bank: "American Express",
    },

    {


        name: "Blue Cash Preferred® Card from American Express",
        link: "http://refer.amex.us/DZMITPBLTZ?xl=cp27",
        img: "https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/CardArt/My-Card/L-Desktop/blue-cash-preferred.png",
        bonus: "$250 back after spending $1,000 in purchases in their first 3 months of Card Membership. $250 back in the form of a statement credit.",
        rewards: [
            "6% cash back at U.S. supermarkets (on up to $6,000 per year in purchases, then 1%)",
            "3% cash back at U.S. gas stations and at select U.S. department stores ",
            "1% back on other purchases",
        ],
        details: [
            "$200 statement credit after you spend $1,000 in purchases on your new Card within the first 3 months.",
            "6% cash back at U.S. supermarkets (on up to $6,000 per year in purchases, then 1%) - that means spending $60 a week at U.S. supermarkets could earn over $180 back per year.",
            "3% cash back at U.S. gas stations and at select U.S. department stores, 1% back on other purchases.",
            "Low intro aPR: 0% for 12 months on purchases and balance transfers, then a variable rate, currently 14.74% to 25.74%.",
            "Over 1.5 million more places in the U.S. started accepting American Express® Cards in 2017.",
            "Cash back is received in the form of Reward Dollars that can be easily redeemed for statement credits, gift cards, and merchandise.",
            "$95 annual fee.",
        ],
        annualFee: "$95",
        intro: "0% on Purchases for 12 months",
        aPR: "14.74%-25.74% Variable",
        balanceTransfer: "0% on Balance Transfers for 12 months",
        remomended: true,
        rating: 0,
        counter: 0,
        bank: "American Express",
    },


    {
        name: "Discover it® Cash Back",
        link: "https://refer.discover.com/s/r5sdh",
        img: "https://www.discover.com/credit-cards/images/cards/CardArt_W_Cash_Blue.png",
        bonus: "$250 back after spending $1,000 in purchases in their first 3 months of Card Membership. $250 back in the form of a statement credit.",
        rewards: [
            "Earn 5% cash back at different places each quarter like gas stations, grocery stores, restaurants, Amazon.com, or wholesale clubs up to the quarterly maximum each time you activate.",
            "Earn 1% unlimited cash back on all other purchases – automatically. ",
        ],
        details: [

            "Earn 5% cash back at different places each quarter like gas stations, grocery stores, restaurants, Amazon.com, or wholesale clubs up to the quarterly maximum each time you activate.",
            "Plus, earn unlimited 1% cash back on all other purchases – automatically.",
            "Intro Offer: Discover will match all the cash back you've earned at the end of your first year, automatically. There's no signing up. And no limit to how much is matched.",
            "Redeem cash back any amount, any time. Rewards never expire.",
            "Use your rewards at Amazon.com checkout.",
            "Receive Free Social Security number alerts—Discover will monitor thousands of risky websites when you sign up.",
            "No annual fee.",
        ],
        annualFee: "$0",
        intro: "0% for 14 months",
        aPR: "0% for 14 months",
        balanceTransfer: "0% for 14 months",
        remomended: true,
        rating: 0,
        counter: 0,
        counter: 0,
        bank: "Discover",
    },


    {
        name: "Bank of America® Cash Rewards credit card",
        link: "https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=C&campaignid=4030283&productoffercode=QD&locale=en_US",
        img: "https://www.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8ckk_8ckl_cshwldcm_mc_250x158.png",
        bonus: "$200 online cash rewards bonus: offer",
        rewards: [
            "Earn 3% on gas for the first $2,500 in combined grocery, wholesale club, gas purchases each quarter",
            "Earn 2% at grocery stores and wholesale clubs for the first $2,500 in combined grocery, wholesale club, gas purchases each quarter",
            "Earn 1% cash back on every purchase",
        ],
        details: [
            "1% cash back on every purchase, 2% at grocery stores and wholesale clubs and 3% on gas for the first $2,500 in combined grocery wholesale, club gas purchases each quarter Calculate rewards",
            "Low Introductory APR offer Show details",
            "Get a 10% customer bonus: every time you redeem into a Bank of America® checking or savings account",
            "If you're a Preferred Rewards client you can increase that bonus: to 25% - 75%",
            "No annual fee.",
        ],
        annualFee: "$0",
        intro: "0% Introductory APR on purchases for 12 billing cycles",
        aPR: "14.99% - 24.99% Variable APR on purchases and balance transfers",
        balanceTransfer: "0% Intro APR for 12 billing cycles for balance transfers made in the first 60 days",
        rating: 0,
        counter: 0,
        bank: "Bank of America",
    },


    {
        name: "BankAmericard® credit card",
        link: "https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=C&campaignid=4028069&productoffercode=E8&locale=en_US",
        img: "https://www.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cae_nrwcm_mc_250x158.png",
        bonus: "One of the ‘Best Cards Right Now’ — Money® Magazine 2017. 0% Intro APR for 15 billing cycles. $0 Intro balance transfer fee for the first 60 days",
        rewards: [
            "Earn 3% on gas for the first $2,500 in combined grocery and wholesale, club and gas purchases each quarter",
            "Earn 2% at grocery stores and wholesale clubs for the first $2,500 in combined grocery/wholesale club/gas purchases each quarter ",
            "Earn 1% cash back on every purchase ",
        ],
        details: [
            "0% Intro APR† for 15 billing cycles for purchases, and any balance transfers made in the first 60 days of opening your account. After that, a variable APR that’s currently 14.74% - 24.74% will apply.",
            "$0 Intro balance transfer fee for the first 60 days your account is open. After that, the fee for future balance transfers is 3% (min. $10).",
            "No Penalty APR. Paying late won't automatically raise your interest rate (APR). Other account pricing and terms apply†.",
            "Access your FICO® Score for free within Online Banking or your Mobile Banking app.",
            "No annual fee.",
        ],
        annualFee: "$0",
        intro: "0% Introductory APR on purchases for 15 billing cycles",
        aPR: "14.74% - 24.74% Variable APR on purchases and balance transfers",
        balanceTransfer: "0% Intro APR for 15 billing cycles for balance transfers made in the first 60 days",
        rating: 0,
        counter: 0,
        bank: "Bank of America",
    },


    {
        name: "Bank of America® Travel Rewards credit card",
        link: "https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=C&campaignid=4030322&productoffercode=SP&locale=en_US",
        img: "https://www.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8blm_trvsigcm_v_250x158.png",
        bonus: "25,000 online bonus: points offer",
        rewards: [
            "Earn unlimited 1.5 points per $1 spent on all purchases, with no annual fee and no foreign transaction fees and your points don't expire",
        ],
        details: [
            "Earn unlimited 1.5 points for every $1 you spend on all purchases everywhere, every time and no expiration on points Calculate Rewards",
            "Low Introductory APR offer Show details",
            "Get an additional 10% customer points bonus: on every purchase when you have an active Bank of America® checking or savings account",
            "If you're a Preferred Rewards client you can increase that bonus: to 25% - 75%",
            "No annual fee.",
            "No foreign transaction fees.",
        ],
        annualFee: "$0",
        intro: "0% Introductory APR on purchases for 12 billing cycles",
        aPR: "16.74% - 24.74% Variable APR on purchases and balance transfers",
        balanceTransfer: "N/A",
        rating: 0,
        counter: 0,
        bank: "Bank of America",
    },

    {
        name: "Bank of America® Premium Rewards® credit card",
        link: "https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=C&campaignid=4022680&productoffercode=35&locale=en_US",
        img: "https://www.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cal_8cai_visa_premiumrewards_250x158.png",
        bonus: "50,000 online bonus: points offer – a $500 value",
        rewards: [
            "Earn unlimited 2 points for every $1 spent on travel and dining purchases",
            "Unlimited 1.5 points per $1 spent on all other purchases",
        ],

        details: [
            "Earn unlimited points - 2 points for every $1 spent on travel and dining purchases and 1.5 points per $1 on all other purchases Calculate Rewards",
            "50,000 bonus: points - a $500 value – after you make at least $3,000 in purchases in the first 90 days of account opening",
            "Get up to $200 in combined Airline Incidental and TSA Pre✓ ® /Global Entry Statement Credits",
            "Enjoy the flexibility to choose how you redeem your points – redeem for cash back as a statement credit or deposit into your eligible Bank of America® or Merrill Lynch® accounts including checking, savings, and 529, or to purchase travel (air, car, and hotel) through the Bank of America Travel Center or redeem for gift cards.",
            "Low $95 annual fee",
            "No foreign transaction fees.",
        ],
        annualFee: "$95",
        intro: "0% Introductory APR on purchases for 12 billing cycles",
        aPR: "17.74 % -24.74 % Variable APR on purchases and balance transfers ",
        balanceTransfer: "N/A",
        rating: 0,
        counter: 0,
        bank: "Bank of America",
    },
];




    db.Card
    .remove({})
    .then(() => db.Card.collection.insertMany(cardSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
}