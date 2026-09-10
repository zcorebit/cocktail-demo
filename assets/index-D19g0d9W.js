const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalogRemote-BvwiG6JS.js","assets/router-BiTtj5ue.js","assets/rolldown-runtime-hePW80VL.js","assets/icons-DAn-K_MS.js","assets/supabaseClient-CxbrJDt6.js","assets/supabaseConfig-BzJ03WVk.js","assets/SearchOverlay-CMuqU4-r.js","assets/vendor-DD7tmkxN.js","assets/useSearch-Br1yqBKB.js","assets/api-Ot4YN6vl.js","assets/Home-CcHLxdR6.js","assets/useDocumentTitle-D9oo8PR6.js","assets/Shop-CvtROCW_.js","assets/CategorySection-CNMU5rz0.js","assets/CategoryCard-B3wXqoA5.js","assets/ShopByDesign-C0TZijyc.js","assets/Breadcrumbs-Cw_IxMxX.js","assets/DesignDetail-BTfCNOOg.js","assets/NotFound-5u81Z3-T.js","assets/designs-M7gSumLx.js","assets/DesignIndividualItems-B-wITafQ.js","assets/ProductGrid-B0eLgszS.js","assets/ProductCard-C3Ah43tE.js","assets/DesignCutlerySets-Ckr94bDQ.js","assets/CutlerySetProductPage-DTnLSmaF.js","assets/AddToCartButton-vEq26yLa.js","assets/SpecialtySets-B49aDvRZ.js","assets/SpecialtySetDetail-B3HqTKw_.js","assets/ProductListing-Ce_gVots.js","assets/Accessories-BuzQZ0h4.js","assets/MakeYourOwnSet-8OSb1QTF.js","assets/Product-CpxFVV1h.js","assets/Cart-n0HlE7rl.js","assets/Checkout-CFaOMgDu.js","assets/commerce-bzdQnPI_.js","assets/discounts-71tySQmW.js","assets/OrderConfirmed-BQvGlK8r.js","assets/OrderStatus-xYCw0xcn.js","assets/Search-DpeD-8DB.js","assets/OurStory-DyfCOxrL.js","assets/Contact-CmOXngdF.js","assets/SpecialOccasionGifts-CKCC4RPH.js","assets/AdminApp-Bkn0EGY0.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-hePW80VL.js";import{A as t,E as n,_ as r,c as i,d as a,f as o,h as s,i as c,t as l,u as ee,v as u,y as d}from"./icons-DAn-K_MS.js";import{n as f,r as te,t as p}from"./vendor-DD7tmkxN.js";import{a as ne,c as re,f as m,n as h,o as g,r as ie,s as ae,t as oe}from"./router-BiTtj5ue.js";import{t as _}from"./supabaseConfig-BzJ03WVk.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var v=e(t(),1),se=f(),y=p(),ce=`cocktail:cart`,le=(0,v.createContext)(void 0);function ue(){try{let e=localStorage.getItem(ce);return e?JSON.parse(e):[]}catch{return[]}}function de({children:e}){let[t,n]=(0,v.useState)(ue),[r,i]=(0,v.useState)(!1);(0,v.useEffect)(()=>{try{localStorage.setItem(ce,JSON.stringify(t))}catch{}},[t]);let a=(0,v.useCallback)((e,t=1)=>{n(n=>n.find(t=>t.product.id===e.id)?n.map(n=>n.product.id===e.id?{...n,quantity:n.quantity+t}:n):[...n,{product:e,quantity:t}]),i(!0)},[]),o=(0,v.useCallback)(e=>{n(t=>t.filter(t=>t.product.id!==e))},[]),s=(0,v.useCallback)((e,t)=>{if(t<=0){n(t=>t.filter(t=>t.product.id!==e));return}n(n=>n.map(n=>n.product.id===e?{...n,quantity:t}:n))},[]),c=(0,v.useCallback)(()=>n([]),[]),l=(0,v.useCallback)(()=>i(!0),[]),ee=(0,v.useCallback)(()=>i(!1),[]),{itemCount:u,subtotal:d}=(0,v.useMemo)(()=>({itemCount:t.reduce((e,t)=>e+t.quantity,0),subtotal:t.reduce((e,t)=>e+t.quantity*t.product.price,0)}),[t]),f={items:t,itemCount:u,subtotal:d,isOpen:r,openCart:l,closeCart:ee,addItem:a,removeItem:o,updateQuantity:s,clearCart:c};return(0,y.jsx)(le.Provider,{value:f,children:e})}function b(){let e=(0,v.useContext)(le);if(!e)throw Error(`useCart must be used within a CartProvider`);return e}function fe(e,t){return[{heading:`Shop By Design`,href:`/shop/designs`,links:e.map(e=>({label:e.name,href:`/shop/designs/${e.slug}`}))},{heading:`Specialty Sets`,href:`/shop/specialty-sets`,links:t.map(e=>({label:e.title,href:`/shop/specialty-sets/${e.slug}`}))},{heading:`More`,links:[{label:`Accessories`,href:`/shop/accessories`},{label:`Create Your Perfect Set`,href:`/make-your-own-set`}]}]}function pe(e,t){return[{label:`Home`,href:`/`},{label:`Shop`,href:`/shop`,megaMenu:fe(e,t)},{label:`Our Story`,href:`/pages/our-story`},{label:`Special Occasion Gifts`,href:`/pages/special-occasion-gifts`},{label:`Contact`,href:`/pages/contact`}]}var me=[{label:`Search`,href:`/search`},{label:`Shop By Design`,href:`/shop/designs`},{label:`Create Your Perfect Set`,href:`/make-your-own-set`},{label:`Our Story`,href:`/pages/our-story`},{label:`Special Occasion Gifts`,href:`/pages/special-occasion-gifts`}];function x(e){return e?e.trim().toLowerCase().replace(/["'’]/g,``).replace(/\s*\/\s*/g,`-`).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``):``}var S=[{id:`dessert-knife-art-amber-half-dull-half-mirror`,handle:`dessert-knife-art-amber-half-dull-half-mirror`,name:`Dessert Knife - Art Amber - Half Dull Half Mirror`,price:807.33,compareAtPrice:null,available:!0,description:``,category:`Dessert Knife`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:null,serving:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cake-fork-art-ashraf-half-dull-half-mirror`,handle:`cake-fork-art-ashraf-half-dull-half-mirror`,name:`Cake Fork - Art Ashraf -  Half Dull Half Mirror`,price:355.82,compareAtPrice:null,available:!0,description:``,category:`Cake Fork`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:null,serving:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cake-fork-art-amber-half-dull-half-mirror`,handle:`cake-fork-art-amber-half-dull-half-mirror`,name:`Cake Fork - Art Amber -  Half Dull Half Mirror`,price:346.15,compareAtPrice:null,available:!0,description:``,category:`Cake Fork`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:null,serving:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-124-pcs-12-serving`,handle:`cutlery-set-art-212-outline-gold-plated-124-pcs-12-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 124 Pcs / 12 Serving`,price:168570,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p>
<p><strong>Set includes:</strong></p>
<ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-124-pcs-12-serving`,handle:`cutlery-set-art-212-mirror-124-pcs-12-serving`,name:`Cutlery Set - Art 212 - Mirror - 124 Pcs / 12 Serving`,price:110080,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-124-pcs-12-serving`,handle:`cutlery-set-art-212-half-gold-plated-124-pcs-12-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 124 Pcs / 12 Serving`,price:166370,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-124-pcs-12-serving`,handle:`cutlery-set-art-111-outline-gold-plated-124-pcs-12-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 124 Pcs / 12 Serving`,price:155230,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-mirror-124-pcs-12-serving`,handle:`cutlery-set-art-111-mirror-124-pcs-12-serving`,name:`Cutlery Set - Art 111 - Mirror - 124 Pcs / 12 Serving`,price:98040,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-124-pcs-12-serving`,handle:`cutlery-set-art-111-full-gold-plated-124-pcs-12-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 124 Pcs / 12 Serving`,price:152030,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-124-pcs-12-serving`,handle:`cutlery-set-art-ruby-full-dull-124-pcs-12-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 124 Pcs / 12 Serving`,price:82670,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-124-pcs-12-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-124-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 124 Pcs / 12 Serving`,price:104300,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-124-pcs-12-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-124-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 124 Pcs / 12 Serving`,price:145420,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-124-pcs-12-serving`,handle:`cutlery-set-art-pearl-mirror-124-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Mirror - 124 Pcs / 12 Serving`,price:89760,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-jade-outline-gold-plated-124-pcs-12-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-124-pcs-12-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 124 Pcs / 12 Serving`,price:140130,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-124-pcs-12-serving`,handle:`cutlery-set-art-jade-mirror-124-pcs-12-serving`,name:`Cutlery Set - Art Jade - Mirror - 124 Pcs / 12 Serving`,price:85030,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-124-pcs-12-serving`,handle:`cutlery-set-art-jade-half-gold-plated-124-pcs-12-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 124 Pcs / 12 Serving`,price:137920,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-124-pcs-12-serving`,handle:`cutlery-set-art-coral-mirror-124-pcs-12-serving`,name:`Cutlery Set - Art Coral - Mirror - 124 Pcs / 12 Serving`,price:83530,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-124-pcs-12-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-124-pcs-12-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 124 Pcs / 12 Serving`,price:82670,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-124-pcs-12-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-124-pcs-12-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 124 Pcs / 12 Serving`,price:82240,compareAtPrice:null,available:!0,description:`<p>Complete 124 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
<li>2 x Service Tong</li>
<li>2 x Ice Tong</li>
<li>12 x Soup Spoon</li>
<li>6 x Demitasse Spoon</li>
<li>2 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`124 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-100-pcs-12-serving`,handle:`cutlery-set-art-212-outline-gold-plated-100-pcs-12-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 100 Pcs / 12 Serving`,price:140020,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-100-pcs-12-serving`,handle:`cutlery-set-art-212-mirror-100-pcs-12-serving`,name:`Cutlery Set - Art 212 - Mirror - 100 Pcs / 12 Serving`,price:91810,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-100-pcs-12-serving`,handle:`cutlery-set-art-212-half-gold-plated-100-pcs-12-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 100 Pcs / 12 Serving`,price:138140,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-100-pcs-12-serving`,handle:`cutlery-set-art-111-outline-gold-plated-100-pcs-12-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 100 Pcs / 12 Serving`,price:129210,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-mirror-100-pcs-12-serving`,handle:`cutlery-set-art-111-mirror-100-pcs-12-serving`,name:`Cutlery Set - Art 111 - Mirror - 100 Pcs / 12 Serving`,price:82130,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-100-pcs-12-serving`,handle:`cutlery-set-art-111-full-gold-plated-100-pcs-12-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 100 Pcs / 12 Serving`,price:126570,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-100-pcs-12-serving`,handle:`cutlery-set-art-ruby-full-dull-100-pcs-12-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 100 Pcs / 12 Serving`,price:69020,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-rose-half-dull-half-mirror-100-pcs-12-serving`,handle:`cutlery-set-art-rose-half-dull-half-mirror-100-pcs-12-serving`,name:`Cutlery Set - Art Rose - Half Dull Half Mirror - 100 Pcs / 12 Serving`,price:66870,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Rose`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 11`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Rose.png?width=800&v=1782312687`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-100-pcs-12-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-100-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 100 Pcs / 12 Serving`,price:86500,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-100-pcs-12-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-100-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 100 Pcs / 12 Serving`,price:120720,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-100-pcs-12-serving`,handle:`cutlery-set-art-pearl-mirror-100-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Mirror - 100 Pcs / 12 Serving`,price:75040,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-opal-mirror-100-pcs-12-serving`,handle:`cutlery-set-art-opal-mirror-100-pcs-12-serving`,name:`Cutlery Set - Art Opal - Mirror - 100 Pcs / 12 Serving`,price:66870,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Opal`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Opal.png?width=800&v=1782312601`},{id:`cutlery-set-art-jade-outline-gold-plated-100-pcs-12-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-100-pcs-12-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 100 Pcs / 12 Serving`,price:116090,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-100-pcs-12-serving`,handle:`cutlery-set-art-jade-mirror-100-pcs-12-serving`,name:`Cutlery Set - Art Jade - Mirror - 100 Pcs / 12 Serving`,price:70840,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-100-pcs-12-serving`,handle:`cutlery-set-art-jade-half-gold-plated-100-pcs-12-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 100 Pcs / 12 Serving`,price:114220,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-100-pcs-12-serving`,handle:`cutlery-set-art-coral-mirror-100-pcs-12-serving`,name:`Cutlery Set - Art Coral - Mirror - 100 Pcs / 12 Serving`,price:69660,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-100-pcs-12-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-100-pcs-12-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 100 Pcs / 12 Serving`,price:68800,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-100-pcs-12-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-100-pcs-12-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 100 Pcs / 12 Serving`,price:68370,compareAtPrice:null,available:!0,description:`<p>Complete 100 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>12 x Cake Fork</li>
<li>2 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>12 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`100 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-68-pcs-12-serving`,handle:`cutlery-set-art-212-outline-gold-plated-68-pcs-12-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 68 Pcs / 12 Serving`,price:94260,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-68-pcs-12-serving`,handle:`cutlery-set-art-212-mirror-68-pcs-12-serving`,name:`Cutlery Set - Art 212 - Mirror - 68 Pcs / 12 Serving`,price:61600,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-68-pcs-12-serving`,handle:`cutlery-set-art-212-half-gold-plated-68-pcs-12-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 68 Pcs / 12 Serving`,price:93050,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-68-pcs-12-serving`,handle:`cutlery-set-art-111-outline-gold-plated-68-pcs-12-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 68 Pcs / 12 Serving`,price:87540,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-mirror-68-pcs-12-serving`,handle:`cutlery-set-art-111-mirror-68-pcs-12-serving`,name:`Cutlery Set - Art 111 - Mirror - 68 Pcs / 12 Serving`,price:55580,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-68-pcs-12-serving`,handle:`cutlery-set-art-111-full-gold-plated-68-pcs-12-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 68 Pcs / 12 Serving`,price:85770,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-68-pcs-12-serving`,handle:`cutlery-set-art-ruby-full-dull-68-pcs-12-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 68 Pcs / 12 Serving`,price:46230,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-rose-half-dull-half-mirror-68-pcs-12-serving`,handle:`cutlery-set-art-rose-half-dull-half-mirror-68-pcs-12-serving`,name:`Cutlery Set - Art Rose - Half Dull Half Mirror - 68 Pcs / 12 Serving`,price:45040,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Rose`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 11`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Rose.png?width=800&v=1782312687`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-68-pcs-12-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-68-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 68 Pcs / 12 Serving`,price:58200,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-68-pcs-12-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-68-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 68 Pcs / 12 Serving`,price:81360,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-68-pcs-12-serving`,handle:`cutlery-set-art-pearl-mirror-68-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Mirror - 68 Pcs / 12 Serving`,price:50310,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-opal-mirror-68-pcs-12-serving`,handle:`cutlery-set-art-opal-mirror-68-pcs-12-serving`,name:`Cutlery Set - Art Opal - Mirror - 68 Pcs / 12 Serving`,price:45040,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Opal`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Opal.png?width=800&v=1782312601`},{id:`cutlery-set-art-jade-outline-gold-plated-68-pcs-12-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-68-pcs-12-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 68 Pcs / 12 Serving`,price:78720,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-68-pcs-12-serving`,handle:`cutlery-set-art-jade-mirror-68-pcs-12-serving`,name:`Cutlery Set - Art Jade - Mirror - 68 Pcs / 12 Serving`,price:48050,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-68-pcs-12-serving`,handle:`cutlery-set-art-jade-half-gold-plated-68-pcs-12-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 68 Pcs / 12 Serving`,price:77510,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-68-pcs-12-serving`,handle:`cutlery-set-art-coral-mirror-68-pcs-12-serving`,name:`Cutlery Set - Art Coral - Mirror - 68 Pcs / 12 Serving`,price:46760,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-68-pcs-12-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-68-pcs-12-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 68 Pcs / 12 Serving`,price:46230,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-68-pcs-12-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-68-pcs-12-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 68 Pcs / 12 Serving`,price:46010,compareAtPrice:null,available:!0,description:`<p>Complete 68 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>12 x Tea Spoon Big</li>
<li>2 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`68 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-52-pcs-12-serving`,handle:`cutlery-set-art-212-outline-gold-plated-52-pcs-12-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 52 Pcs / 12 Serving`,price:76513.5,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-52-pcs-12-serving`,handle:`cutlery-set-art-212-mirror-52-pcs-12-serving`,name:`Cutlery Set - Art 212 - Mirror - 52 Pcs / 12 Serving`,price:51060,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-52-pcs-12-serving`,handle:`cutlery-set-art-212-half-gold-plated-52-pcs-12-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 52 Pcs / 12 Serving`,price:75521.25,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-52-pcs-12-serving`,handle:`cutlery-set-art-111-outline-gold-plated-52-pcs-12-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 52 Pcs / 12 Serving`,price:71331.75,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-mirror-52-pcs-12-serving`,handle:`cutlery-set-art-111-mirror-52-pcs-12-serving`,name:`Cutlery Set - Art 111 - Mirror - 52 Pcs / 12 Serving`,price:46440,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-52-pcs-12-serving`,handle:`cutlery-set-art-111-full-gold-plated-52-pcs-12-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 52 Pcs / 12 Serving`,price:70008.75,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-52-pcs-12-serving`,handle:`cutlery-set-art-ruby-full-dull-52-pcs-12-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 52 Pcs / 12 Serving`,price:38920,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-rose-half-dull-half-mirror-52-pcs-12-serving`,handle:`cutlery-set-art-rose-half-dull-half-mirror-52-pcs-12-serving`,name:`Cutlery Set - Art Rose - Half Dull Half Mirror - 52 Pcs / 12 Serving`,price:38590,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Rose`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 11`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Rose.png?width=800&v=1782312687`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-52-pcs-12-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-52-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 52 Pcs / 12 Serving`,price:47900,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-52-pcs-12-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-52-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 52 Pcs / 12 Serving`,price:66370,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-52-pcs-12-serving`,handle:`cutlery-set-art-pearl-mirror-52-pcs-12-serving`,name:`Cutlery Set - Art Pearl - Mirror - 52 Pcs / 12 Serving`,price:42140,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-opal-mirror-52-pcs-12-serving`,handle:`cutlery-set-art-opal-mirror-52-pcs-12-serving`,name:`Cutlery Set - Art Opal - Mirror - 52 Pcs / 12 Serving`,price:38590,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Opal`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Opal.png?width=800&v=1782312601`},{id:`cutlery-set-art-jade-outline-gold-plated-52-pcs-12-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-52-pcs-12-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 52 Pcs / 12 Serving`,price:64610,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-52-pcs-12-serving`,handle:`cutlery-set-art-jade-mirror-52-pcs-12-serving`,name:`Cutlery Set - Art Jade - Mirror - 52 Pcs / 12 Serving`,price:40530,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-52-pcs-12-serving`,handle:`cutlery-set-art-jade-half-gold-plated-52-pcs-12-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 52 Pcs / 12 Serving`,price:63610,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-52-pcs-12-serving`,handle:`cutlery-set-art-coral-mirror-52-pcs-12-serving`,name:`Cutlery Set - Art Coral - Mirror - 52 Pcs / 12 Serving`,price:39450,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-52-pcs-12-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-52-pcs-12-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 52 Pcs / 12 Serving`,price:38920,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-52-pcs-12-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-52-pcs-12-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 52 Pcs / 12 Serving`,price:38810,compareAtPrice:null,available:!0,description:`<p>Complete 52 Pcs / 12 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>12 x Tea/Coffee Spoon</li>
<li>12 x Dessert Spoon</li>
<li>12 x Dessert Fork</li>
<li>12 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`52 Pcs / 12 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-80-pcs-8-serving`,handle:`cutlery-set-art-212-outline-gold-plated-80-pcs-8-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 80 Pcs / 8 Serving`,price:118740,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-80-pcs-8-serving`,handle:`cutlery-set-art-212-mirror-80-pcs-8-serving`,name:`Cutlery Set - Art 212 - Mirror - 80 Pcs / 8 Serving`,price:79770,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-80-pcs-8-serving`,handle:`cutlery-set-art-212-half-gold-plated-80-pcs-8-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 80 Pcs / 8 Serving`,price:117310,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-80-pcs-8-serving`,handle:`cutlery-set-art-111-outline-gold-plated-80-pcs-8-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 80 Pcs / 8 Serving`,price:110140,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-mirror-80-pcs-8-serving`,handle:`cutlery-set-art-111-mirror-80-pcs-8-serving`,name:`Cutlery Set - Art 111 - Mirror - 80 Pcs / 8 Serving`,price:72130,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-80-pcs-8-serving`,handle:`cutlery-set-art-111-full-gold-plated-80-pcs-8-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 80 Pcs / 8 Serving`,price:108050,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-80-pcs-8-serving`,handle:`cutlery-set-art-ruby-full-dull-80-pcs-8-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 80 Pcs / 8 Serving`,price:62350,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-80-pcs-8-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-80-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 80 Pcs / 8 Serving`,price:81380,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-80-pcs-8-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-80-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 80 Pcs / 8 Serving`,price:104080,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-80-pcs-8-serving`,handle:`cutlery-set-art-pearl-mirror-80-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Mirror - 80 Pcs / 8 Serving`,price:66970,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-jade-outline-gold-plated-80-pcs-8-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-80-pcs-8-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 80 Pcs / 8 Serving`,price:100550,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-80-pcs-8-serving`,handle:`cutlery-set-art-jade-mirror-80-pcs-8-serving`,name:`Cutlery Set - Art Jade - Mirror - 80 Pcs / 8 Serving`,price:63860,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-80-pcs-8-serving`,handle:`cutlery-set-art-jade-half-gold-plated-80-pcs-8-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 80 Pcs / 8 Serving`,price:99110,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-80-pcs-8-serving`,handle:`cutlery-set-art-coral-mirror-80-pcs-8-serving`,name:`Cutlery Set - Art Coral - Mirror - 80 Pcs / 8 Serving`,price:62780,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-80-pcs-8-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-80-pcs-8-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 80 Pcs / 8 Serving`,price:62240,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-80-pcs-8-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-80-pcs-8-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 80 Pcs / 8 Serving`,price:62030,compareAtPrice:null,available:!0,description:`<p>Complete 80 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>8 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`80 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-66-pcs-8-serving`,handle:`cutlery-set-art-212-outline-gold-plated-66-pcs-8-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 66 Pcs / 8 Serving`,price:98340,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-66-pcs-8-serving`,handle:`cutlery-set-art-212-mirror-66-pcs-8-serving`,name:`Cutlery Set - Art 212 - Mirror - 66 Pcs / 8 Serving`,price:65900,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-66-pcs-8-serving`,handle:`cutlery-set-art-212-half-gold-plated-66-pcs-8-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 66 Pcs / 8 Serving`,price:97130,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-66-pcs-8-serving`,handle:`cutlery-set-art-111-outline-gold-plated-66-pcs-8-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 66 Pcs / 8 Serving`,price:91290,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-mirror-66-pcs-8-serving`,handle:`cutlery-set-art-111-mirror-66-pcs-8-serving`,name:`Cutlery Set - Art 111 - Mirror - 66 Pcs / 8 Serving`,price:59560,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-66-pcs-8-serving`,handle:`cutlery-set-art-111-full-gold-plated-66-pcs-8-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 66 Pcs / 8 Serving`,price:89520,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-66-pcs-8-serving`,handle:`cutlery-set-art-ruby-full-dull-66-pcs-8-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 66 Pcs / 8 Serving`,price:51060,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-rose-half-dull-half-mirror-66-pcs-8-serving`,handle:`cutlery-set-art-rose-half-dull-half-mirror-66-pcs-8-serving`,name:`Cutlery Set - Art Rose - Half Dull Half Mirror - 66 Pcs / 8 Serving`,price:49670,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Rose`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 11`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Rose.png?width=800&v=1782312687`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-66-pcs-8-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-66-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 66 Pcs / 8 Serving`,price:66970,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-66-pcs-8-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-66-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 66 Pcs / 8 Serving`,price:85880,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-66-pcs-8-serving`,handle:`cutlery-set-art-pearl-mirror-66-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Mirror - 66 Pcs / 8 Serving`,price:55040,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-opal-mirror-66-pcs-8-serving`,handle:`cutlery-set-art-opal-mirror-66-pcs-8-serving`,name:`Cutlery Set - Art Opal - Mirror - 66 Pcs / 8 Serving`,price:49670,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Opal`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Opal.png?width=800&v=1782312601`},{id:`cutlery-set-art-jade-outline-gold-plated-66-pcs-8-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-66-pcs-8-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 66 Pcs / 8 Serving`,price:82910,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-66-pcs-8-serving`,handle:`cutlery-set-art-jade-mirror-66-pcs-8-serving`,name:`Cutlery Set - Art Jade - Mirror - 66 Pcs / 8 Serving`,price:52350,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-66-pcs-8-serving`,handle:`cutlery-set-art-jade-half-gold-plated-66-pcs-8-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 66 Pcs / 8 Serving`,price:81700,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-66-pcs-8-serving`,handle:`cutlery-set-art-coral-mirror-66-pcs-8-serving`,name:`Cutlery Set - Art Coral - Mirror - 66 Pcs / 8 Serving`,price:51490,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-66-pcs-8-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-66-pcs-8-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 66 Pcs / 8 Serving`,price:50960,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-66-pcs-8-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-66-pcs-8-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 66 Pcs / 8 Serving`,price:50740,compareAtPrice:null,available:!0,description:`<p>Complete 66 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>2 x Butter Knife</li>
<li>8 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>2 x Service Fork</li>
<li>8 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`66 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-46-pcs-8-serving`,handle:`cutlery-set-art-212-outline-gold-plated-46-pcs-8-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 46 Pcs / 8 Serving`,price:67360,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-46-pcs-8-serving`,handle:`cutlery-set-art-212-mirror-46-pcs-8-serving`,name:`Cutlery Set - Art 212 - Mirror - 46 Pcs / 8 Serving`,price:44830,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-46-pcs-8-serving`,handle:`cutlery-set-art-212-half-gold-plated-46-pcs-8-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 46 Pcs / 8 Serving`,price:66480,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-46-pcs-8-serving`,handle:`cutlery-set-art-111-outline-gold-plated-46-pcs-8-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 46 Pcs / 8 Serving`,price:62620,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-mirror-46-pcs-8-serving`,handle:`cutlery-set-art-111-mirror-46-pcs-8-serving`,name:`Cutlery Set - Art 111 - Mirror - 46 Pcs / 8 Serving`,price:40640,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-46-pcs-8-serving`,handle:`cutlery-set-art-111-full-gold-plated-46-pcs-8-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 46 Pcs / 8 Serving`,price:61410,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-46-pcs-8-serving`,handle:`cutlery-set-art-ruby-full-dull-46-pcs-8-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 46 Pcs / 8 Serving`,price:34400,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-rose-half-dull-half-mirror-46-pcs-8-serving`,handle:`cutlery-set-art-rose-half-dull-half-mirror-46-pcs-8-serving`,name:`Cutlery Set - Art Rose - Half Dull Half Mirror - 46 Pcs / 8 Serving`,price:33650,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Rose`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 11`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Rose.png?width=800&v=1782312687`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-46-pcs-8-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-46-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 46 Pcs / 8 Serving`,price:45470,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-46-pcs-8-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-46-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 46 Pcs / 8 Serving`,price:58540,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-46-pcs-8-serving`,handle:`cutlery-set-art-pearl-mirror-46-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Mirror - 46 Pcs / 8 Serving`,price:37200,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-opal-mirror-46-pcs-8-serving`,handle:`cutlery-set-art-opal-mirror-46-pcs-8-serving`,name:`Cutlery Set - Art Opal - Mirror - 46 Pcs / 8 Serving`,price:33650,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Opal`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Opal.png?width=800&v=1782312601`},{id:`cutlery-set-art-jade-outline-gold-plated-46-pcs-8-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-46-pcs-8-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 46 Pcs / 8 Serving`,price:56780,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-46-pcs-8-serving`,handle:`cutlery-set-art-jade-mirror-46-pcs-8-serving`,name:`Cutlery Set - Art Jade - Mirror - 46 Pcs / 8 Serving`,price:35580,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-46-pcs-8-serving`,handle:`cutlery-set-art-jade-half-gold-plated-46-pcs-8-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 46 Pcs / 8 Serving`,price:55900,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-46-pcs-8-serving`,handle:`cutlery-set-art-coral-mirror-46-pcs-8-serving`,name:`Cutlery Set - Art Coral - Mirror - 46 Pcs / 8 Serving`,price:34720,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-46-pcs-8-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-46-pcs-8-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 46 Pcs / 8 Serving`,price:34400,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-46-pcs-8-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-46-pcs-8-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 46 Pcs / 8 Serving`,price:34190,compareAtPrice:null,available:!0,description:`<p>Complete 46 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>8 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`46 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-36-pcs-8-serving`,handle:`cutlery-set-art-212-outline-gold-plated-36-pcs-8-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 36 Pcs / 8 Serving`,price:55570,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-36-pcs-8-serving`,handle:`cutlery-set-art-212-mirror-36-pcs-8-serving`,name:`Cutlery Set - Art 212 - Mirror - 36 Pcs / 8 Serving`,price:37630,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-36-pcs-8-serving`,handle:`cutlery-set-art-212-half-gold-plated-36-pcs-8-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 36 Pcs / 8 Serving`,price:54900,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-36-pcs-8-serving`,handle:`cutlery-set-art-111-outline-gold-plated-36-pcs-8-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 36 Pcs / 8 Serving`,price:51930,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-mirror-36-pcs-8-serving`,handle:`cutlery-set-art-111-mirror-36-pcs-8-serving`,name:`Cutlery Set - Art 111 - Mirror - 36 Pcs / 8 Serving`,price:34290,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-36-pcs-8-serving`,handle:`cutlery-set-art-111-full-gold-plated-36-pcs-8-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 36 Pcs / 8 Serving`,price:50940,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-36-pcs-8-serving`,handle:`cutlery-set-art-ruby-full-dull-36-pcs-8-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 36 Pcs / 8 Serving`,price:29240,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-rose-half-dull-half-mirror-36-pcs-8-serving`,handle:`cutlery-set-art-rose-half-dull-half-mirror-36-pcs-8-serving`,name:`Cutlery Set - Art Rose - Half Dull Half Mirror - 36 Pcs / 8 Serving`,price:29030,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Rose`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 11`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Rose.png?width=800&v=1782312687`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-36-pcs-8-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-36-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 36 Pcs / 8 Serving`,price:37950,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-36-pcs-8-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-36-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 36 Pcs / 8 Serving`,price:48510,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-36-pcs-8-serving`,handle:`cutlery-set-art-pearl-mirror-36-pcs-8-serving`,name:`Cutlery Set - Art Pearl - Mirror - 36 Pcs / 8 Serving`,price:31390,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-opal-mirror-36-pcs-8-serving`,handle:`cutlery-set-art-opal-mirror-36-pcs-8-serving`,name:`Cutlery Set - Art Opal - Mirror - 36 Pcs / 8 Serving`,price:29030,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Opal`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Opal.png?width=800&v=1782312601`},{id:`cutlery-set-art-jade-outline-gold-plated-36-pcs-8-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-36-pcs-8-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 36 Pcs / 8 Serving`,price:47190,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-36-pcs-8-serving`,handle:`cutlery-set-art-jade-mirror-36-pcs-8-serving`,name:`Cutlery Set - Art Jade - Mirror - 36 Pcs / 8 Serving`,price:30320,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-36-pcs-8-serving`,handle:`cutlery-set-art-jade-half-gold-plated-36-pcs-8-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 36 Pcs / 8 Serving`,price:46530,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-36-pcs-8-serving`,handle:`cutlery-set-art-coral-mirror-36-pcs-8-serving`,name:`Cutlery Set - Art Coral - Mirror - 36 Pcs / 8 Serving`,price:29670,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-36-pcs-8-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-36-pcs-8-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 36 Pcs / 8 Serving`,price:29240,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-36-pcs-8-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-36-pcs-8-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 36 Pcs / 8 Serving`,price:29030,compareAtPrice:null,available:!0,description:`<p>Complete 36 Pcs / 8 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>8 x Tea/Coffee Spoon</li>
<li>8 x Dessert Spoon</li>
<li>8 x Dessert Fork</li>
<li>8 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`36 Pcs / 8 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-62-pcs-6-serving`,handle:`cutlery-set-art-212-outline-gold-plated-62-pcs-6-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 62 Pcs / 6 Serving`,price:97350,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-62-pcs-6-serving`,handle:`cutlery-set-art-212-mirror-62-pcs-6-serving`,name:`Cutlery Set - Art 212 - Mirror - 62 Pcs / 6 Serving`,price:66650,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-62-pcs-6-serving`,handle:`cutlery-set-art-212-half-gold-plated-62-pcs-6-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 62 Pcs / 6 Serving`,price:96250,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-62-pcs-6-serving`,handle:`cutlery-set-art-111-outline-gold-plated-62-pcs-6-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 62 Pcs / 6 Serving`,price:90630,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-mirror-62-pcs-6-serving`,handle:`cutlery-set-art-111-mirror-62-pcs-6-serving`,name:`Cutlery Set - Art 111 - Mirror - 62 Pcs / 6 Serving`,price:60630,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-62-pcs-6-serving`,handle:`cutlery-set-art-111-full-gold-plated-62-pcs-6-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 62 Pcs / 6 Serving`,price:89080,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-62-pcs-6-serving`,handle:`cutlery-set-art-ruby-full-dull-62-pcs-6-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 62 Pcs / 6 Serving`,price:53430,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-62-pcs-6-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-62-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 62 Pcs / 6 Serving`,price:68050,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-62-pcs-6-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-62-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 62 Pcs / 6 Serving`,price:86220,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-62-pcs-6-serving`,handle:`cutlery-set-art-pearl-mirror-62-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Mirror - 62 Pcs / 6 Serving`,price:56870,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-jade-outline-gold-plated-62-pcs-6-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-62-pcs-6-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 62 Pcs / 6 Serving`,price:83570,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-62-pcs-6-serving`,handle:`cutlery-set-art-jade-mirror-62-pcs-6-serving`,name:`Cutlery Set - Art Jade - Mirror - 62 Pcs / 6 Serving`,price:54500,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-62-pcs-6-serving`,handle:`cutlery-set-art-jade-half-gold-plated-62-pcs-6-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 62 Pcs / 6 Serving`,price:82470,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-62-pcs-6-serving`,handle:`cutlery-set-art-coral-mirror-62-pcs-6-serving`,name:`Cutlery Set - Art Coral - Mirror - 62 Pcs / 6 Serving`,price:53750,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-62-pcs-6-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-62-pcs-6-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 62 Pcs / 6 Serving`,price:53320,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-62-pcs-6-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-62-pcs-6-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 62 Pcs / 6 Serving`,price:53110,compareAtPrice:null,available:!0,description:`<p>Complete 62 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
<li>1 x Service Tong</li>
<li>1 x Ice Tong</li>
<li>6 x Soup Spoon</li>
<li>3 x Demitasse Spoon</li>
<li>1 x Soup Ladle 9"</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`62 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-50-pcs-6-serving`,handle:`cutlery-set-art-212-outline-gold-plated-50-pcs-6-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 50 Pcs / 6 Serving`,price:77290,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-50-pcs-6-serving`,handle:`cutlery-set-art-212-mirror-50-pcs-6-serving`,name:`Cutlery Set - Art 212 - Mirror - 50 Pcs / 6 Serving`,price:52460,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-50-pcs-6-serving`,handle:`cutlery-set-art-212-half-gold-plated-50-pcs-6-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 50 Pcs / 6 Serving`,price:76400,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-50-pcs-6-serving`,handle:`cutlery-set-art-111-outline-gold-plated-50-pcs-6-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 50 Pcs / 6 Serving`,price:71880,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-mirror-50-pcs-6-serving`,handle:`cutlery-set-art-111-mirror-50-pcs-6-serving`,name:`Cutlery Set - Art 111 - Mirror - 50 Pcs / 6 Serving`,price:47620,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-50-pcs-6-serving`,handle:`cutlery-set-art-111-full-gold-plated-50-pcs-6-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 50 Pcs / 6 Serving`,price:70560,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-50-pcs-6-serving`,handle:`cutlery-set-art-ruby-full-dull-50-pcs-6-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 50 Pcs / 6 Serving`,price:41170,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-rose-half-dull-half-mirror-50-pcs-6-serving`,handle:`cutlery-set-art-rose-half-dull-half-mirror-50-pcs-6-serving`,name:`Cutlery Set - Art Rose - Half Dull Half Mirror - 50 Pcs / 6 Serving`,price:40210,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Rose`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 11`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Rose.png?width=800&v=1782312687`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-50-pcs-6-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-50-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 50 Pcs / 6 Serving`,price:53210,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-50-pcs-6-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-50-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 50 Pcs / 6 Serving`,price:67910,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-50-pcs-6-serving`,handle:`cutlery-set-art-pearl-mirror-50-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Mirror - 50 Pcs / 6 Serving`,price:44180,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-opal-mirror-50-pcs-6-serving`,handle:`cutlery-set-art-opal-mirror-50-pcs-6-serving`,name:`Cutlery Set - Art Opal - Mirror - 50 Pcs / 6 Serving`,price:40210,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Opal`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Opal.png?width=800&v=1782312601`},{id:`cutlery-set-art-jade-outline-gold-plated-50-pcs-6-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-50-pcs-6-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 50 Pcs / 6 Serving`,price:65600,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-50-pcs-6-serving`,handle:`cutlery-set-art-jade-mirror-50-pcs-6-serving`,name:`Cutlery Set - Art Jade - Mirror - 50 Pcs / 6 Serving`,price:42140,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-50-pcs-6-serving`,handle:`cutlery-set-art-jade-half-gold-plated-50-pcs-6-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 50 Pcs / 6 Serving`,price:64610,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-50-pcs-6-serving`,handle:`cutlery-set-art-coral-mirror-50-pcs-6-serving`,name:`Cutlery Set - Art Coral - Mirror - 50 Pcs / 6 Serving`,price:41500,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-50-pcs-6-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-50-pcs-6-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 50 Pcs / 6 Serving`,price:41070,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-50-pcs-6-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-50-pcs-6-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 50 Pcs / 6 Serving`,price:40960,compareAtPrice:null,available:!0,description:`<p>Complete 50 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>2 x Service Curry Spoon</li>
<li>2 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
<li>6 x Cake Fork</li>
<li>1 x Cake Lifter</li>
<li>1 x Service Fork</li>
<li>6 x Ice Cream Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`50 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-34-pcs-6-serving`,handle:`cutlery-set-art-212-outline-gold-plated-34-pcs-6-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 34 Pcs / 6 Serving`,price:51270,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-34-pcs-6-serving`,handle:`cutlery-set-art-212-mirror-34-pcs-6-serving`,name:`Cutlery Set - Art 212 - Mirror - 34 Pcs / 6 Serving`,price:34510,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-34-pcs-6-serving`,handle:`cutlery-set-art-212-half-gold-plated-34-pcs-6-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 34 Pcs / 6 Serving`,price:50600,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-34-pcs-6-serving`,handle:`cutlery-set-art-111-outline-gold-plated-34-pcs-6-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 34 Pcs / 6 Serving`,price:47850,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/files/3.png?width=800&v=1783205081`},{id:`cutlery-set-art-111-mirror-34-pcs-6-serving`,handle:`cutlery-set-art-111-mirror-34-pcs-6-serving`,name:`Cutlery Set - Art 111 - Mirror - 34 Pcs / 6 Serving`,price:31500,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-34-pcs-6-serving`,handle:`cutlery-set-art-111-full-gold-plated-34-pcs-6-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 34 Pcs / 6 Serving`,price:46970,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-34-pcs-6-serving`,handle:`cutlery-set-art-ruby-full-dull-34-pcs-6-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 34 Pcs / 6 Serving`,price:26880,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-rose-half-dull-half-mirror-34-pcs-6-serving`,handle:`cutlery-set-art-rose-half-dull-half-mirror-34-pcs-6-serving`,name:`Cutlery Set - Art Rose - Half Dull Half Mirror - 34 Pcs / 6 Serving`,price:26340,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Rose`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 11`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Rose.png?width=800&v=1782312687`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-34-pcs-6-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-34-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 34 Pcs / 6 Serving`,price:35050,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-34-pcs-6-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-34-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 34 Pcs / 6 Serving`,price:44980,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-34-pcs-6-serving`,handle:`cutlery-set-art-pearl-mirror-34-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Mirror - 34 Pcs / 6 Serving`,price:29030,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-opal-mirror-34-pcs-6-serving`,handle:`cutlery-set-art-opal-mirror-34-pcs-6-serving`,name:`Cutlery Set - Art Opal - Mirror - 34 Pcs / 6 Serving`,price:26340,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Opal`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Opal.png?width=800&v=1782312601`},{id:`cutlery-set-art-jade-outline-gold-plated-34-pcs-6-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-34-pcs-6-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 34 Pcs / 6 Serving`,price:43660,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-34-pcs-6-serving`,handle:`cutlery-set-art-jade-mirror-34-pcs-6-serving`,name:`Cutlery Set - Art Jade - Mirror - 34 Pcs / 6 Serving`,price:27840,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-34-pcs-6-serving`,handle:`cutlery-set-art-jade-half-gold-plated-34-pcs-6-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 34 Pcs / 6 Serving`,price:43e3,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-34-pcs-6-serving`,handle:`cutlery-set-art-coral-mirror-34-pcs-6-serving`,name:`Cutlery Set - Art Coral - Mirror - 34 Pcs / 6 Serving`,price:27200,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-34-pcs-6-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-34-pcs-6-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 34 Pcs / 6 Serving`,price:26880,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-34-pcs-6-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-34-pcs-6-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 34 Pcs / 6 Serving`,price:26770,compareAtPrice:null,available:!0,description:`<p>Complete 34 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
<li>6 x Tea Spoon Big</li>
<li>1 x Sugar Spoon</li>
<li>1 x Butter Knife</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`34 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`},{id:`cutlery-set-art-212-outline-gold-plated-26-pcs-6-serving`,handle:`cutlery-set-art-212-outline-gold-plated-26-pcs-6-serving`,name:`Cutlery Set - Art 212 - Outline Gold Plated - 26 Pcs / 6 Serving`,price:41120,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 304 - SWG 11`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-mirror-26-pcs-6-serving`,handle:`cutlery-set-art-212-mirror-26-pcs-6-serving`,name:`Cutlery Set - Art 212 - Mirror - 26 Pcs / 6 Serving`,price:28060,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 304 - SWG 11`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-212-half-gold-plated-26-pcs-6-serving`,handle:`cutlery-set-art-212-half-gold-plated-26-pcs-6-serving`,name:`Cutlery Set - Art 212 - Half Gold Plated - 26 Pcs / 6 Serving`,price:40570,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 212`,series:`Valuable Series`,finish:`Half Gold Plated`,material:`AISI 304 - SWG 11`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`},{id:`cutlery-set-art-111-outline-gold-plated-26-pcs-6-serving`,handle:`cutlery-set-art-111-outline-gold-plated-26-pcs-6-serving`,name:`Cutlery Set - Art 111 - Outline Gold Plated - 26 Pcs / 6 Serving`,price:38480,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-mirror-26-pcs-6-serving`,handle:`cutlery-set-art-111-mirror-26-pcs-6-serving`,name:`Cutlery Set - Art 111 - Mirror - 26 Pcs / 6 Serving`,price:25690,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-111-full-gold-plated-26-pcs-6-serving`,handle:`cutlery-set-art-111-full-gold-plated-26-pcs-6-serving`,name:`Cutlery Set - Art 111 - Full Gold Plated - 26 Pcs / 6 Serving`,price:37820,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art 111`,series:`Valuable Series`,finish:`Full Gold Plated`,material:`AISI 430 - SWG 11`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{id:`cutlery-set-art-ruby-full-dull-26-pcs-6-serving`,handle:`cutlery-set-art-ruby-full-dull-26-pcs-6-serving`,name:`Cutlery Set - Art Ruby - Full Dull - 26 Pcs / 6 Serving`,price:22040,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ruby`,series:`Average Series`,finish:`Full Dull`,material:`AISI 430 - SWG 14`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`},{id:`cutlery-set-art-rose-half-dull-half-mirror-26-pcs-6-serving`,handle:`cutlery-set-art-rose-half-dull-half-mirror-26-pcs-6-serving`,name:`Cutlery Set - Art Rose - Half Dull Half Mirror - 26 Pcs / 6 Serving`,price:21930,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Rose`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 11`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Rose.png?width=800&v=1782312687`},{id:`cutlery-set-art-pearl-silky-silver-outline-mirror-26-pcs-6-serving`,handle:`cutlery-set-art-pearl-silky-silver-outline-mirror-26-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Silky Silver Outline Mirror - 26 Pcs / 6 Serving`,price:28380,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Silky Silver Outline Mirror`,material:`AISI 430 - SWG 11`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-outline-gold-plated-26-pcs-6-serving`,handle:`cutlery-set-art-pearl-outline-gold-plated-26-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Outline Gold Plated - 26 Pcs / 6 Serving`,price:36050,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 11`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-pearl-mirror-26-pcs-6-serving`,handle:`cutlery-set-art-pearl-mirror-26-pcs-6-serving`,name:`Cutlery Set - Art Pearl - Mirror - 26 Pcs / 6 Serving`,price:23650,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Pearl`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`},{id:`cutlery-set-art-opal-mirror-26-pcs-6-serving`,handle:`cutlery-set-art-opal-mirror-26-pcs-6-serving`,name:`Cutlery Set - Art Opal - Mirror - 26 Pcs / 6 Serving`,price:21930,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Opal`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 11`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Opal.png?width=800&v=1782312601`},{id:`cutlery-set-art-jade-outline-gold-plated-26-pcs-6-serving`,handle:`cutlery-set-art-jade-outline-gold-plated-26-pcs-6-serving`,name:`Cutlery Set - Art Jade - Outline Gold Plated - 26 Pcs / 6 Serving`,price:35170,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Outline Gold Plated`,material:`AISI 430 - SWG 14`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-mirror-26-pcs-6-serving`,handle:`cutlery-set-art-jade-mirror-26-pcs-6-serving`,name:`Cutlery Set - Art Jade - Mirror - 26 Pcs / 6 Serving`,price:22900,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-jade-half-gold-plated-26-pcs-6-serving`,handle:`cutlery-set-art-jade-half-gold-plated-26-pcs-6-serving`,name:`Cutlery Set - Art Jade - Half Gold Plated - 26 Pcs / 6 Serving`,price:34730,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Jade`,series:`Average Series`,finish:`Half Gold Plated`,material:`AISI 430 - SWG 14`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{id:`cutlery-set-art-coral-mirror-26-pcs-6-serving`,handle:`cutlery-set-art-coral-mirror-26-pcs-6-serving`,name:`Cutlery Set - Art Coral - Mirror - 26 Pcs / 6 Serving`,price:22360,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Coral`,series:`Average Series`,finish:`Mirror`,material:`AISI 430 - SWG 14`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`},{id:`cutlery-set-art-ashraf-half-dull-half-mirror-26-pcs-6-serving`,handle:`cutlery-set-art-ashraf-half-dull-half-mirror-26-pcs-6-serving`,name:`Cutlery Set - Art Ashraf - Half Dull Half Mirror - 26 Pcs / 6 Serving`,price:22040,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Ashraf`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`},{id:`cutlery-set-art-amber-half-dull-half-mirror-26-pcs-6-serving`,handle:`cutlery-set-art-amber-half-dull-half-mirror-26-pcs-6-serving`,name:`Cutlery Set - Art Amber - Half Dull Half Mirror - 26 Pcs / 6 Serving`,price:21930,compareAtPrice:null,available:!0,description:`<p>Complete 26 Pcs / 6 Serving stainless steel cutlery set.</p><p><strong>Set includes:</strong></p><ul>
<li>6 x Tea/Coffee Spoon</li>
<li>6 x Dessert Spoon</li>
<li>6 x Dessert Fork</li>
<li>6 x Dessert Knife</li>
<li>1 x Service Curry Spoon</li>
<li>1 x Service Rice Spoon</li>
</ul>`,category:`Cutlery Set`,design:`Art Amber`,series:`Average Series`,finish:`Half Dull Half Mirror`,material:`AISI 430 - SWG 14`,serving:`26 Pcs / 6 Serving`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`}],he=[{id:`100-pcs-12-serving`,handle:`100-pcs-12-serving`,title:`100 Pcs / 12 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_12_Serving_100.png?width=800&v=1782311999`,productsCount:18},{id:`124-pcs-12-serving`,handle:`124-pcs-12-serving`,title:`124 Pcs / 12 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_12_Serving_124.png?width=800&v=1782311964`,productsCount:17},{id:`26-pcs-6-serving`,handle:`26-pcs-6-serving`,title:`26 Pcs / 6 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Trays_6_Serving_26.png?width=800&v=1782303474`,productsCount:18},{id:`34-pcs-6-serving`,handle:`34-pcs-6-serving`,title:`34 Pcs / 6 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/1.png?width=800&v=1782311787`,productsCount:18},{id:`36-pcs-8-serving`,handle:`36-pcs-8-serving`,title:`36 Pcs / 8 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_8_Serving_36.png?width=800&v=1782312207`,productsCount:18},{id:`46-pcs-8-serving`,handle:`46-pcs-8-serving`,title:`46 Pcs / 8 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_8_Serving_46.png?width=800&v=1782312163`,productsCount:18},{id:`50-pcs-6-serving`,handle:`50-pcs-6-serving`,title:`50 Pcs / 6 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_6_Serving_50.png?width=800&v=1782311858`,productsCount:18},{id:`52-pcs-12-serving`,handle:`52-pcs-12-serving`,title:`52 Pcs / 12 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_12_Serving_52.png?width=800&v=1782312055`,productsCount:18},{id:`62-pcs-6-serving`,handle:`62-pcs-6-serving`,title:`62 Pcs / 6 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_6_Serving_62.png?width=800&v=1782311901`,productsCount:16},{id:`66-pcs-8-serving`,handle:`66-pcs-8-serving`,title:`66 Pcs / 8 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_8_Serving_66.png?width=800&v=1782312134`,productsCount:18},{id:`68-pcs-12-serving`,handle:`68-pcs-12-serving`,title:`68 Pcs / 12 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_12_Serving_68.png?width=800&v=1782312026`,productsCount:18},{id:`80-pcs-8-serving`,handle:`80-pcs-8-serving`,title:`80 Pcs / 8 Serving`,description:null,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_8_Serving_80.png?width=800&v=1782312088`,productsCount:16},{id:`art-111`,handle:`art-111`,title:`Art 111`,description:``,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`,productsCount:36},{id:`art-212`,handle:`art-212`,title:`Art 212`,description:``,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_212_mirror.png?width=800&v=1782312808`,productsCount:37},{id:`art-amber`,handle:`art-amber`,title:`Art Amber`,description:``,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Amber.png?width=800&v=1782312370`,productsCount:12},{id:`art-ashraf`,handle:`art-ashraf`,title:`Art Ashraf`,description:``,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ashraf.png?width=800&v=1782312562`,productsCount:12},{id:`art-coral`,handle:`art-coral`,title:`Art Coral`,description:``,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Coral.png?width=800&v=1782312649`,productsCount:12},{id:`art-jade`,handle:`art-jade`,title:`Art Jade`,description:``,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`,productsCount:36},{id:`art-opal`,handle:`art-opal`,title:`Art Opal`,description:``,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Opal.png?width=800&v=1782312601`,productsCount:9},{id:`art-pearl`,handle:`art-pearl`,title:`Art Pearl`,description:``,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`,productsCount:36},{id:`art-rose`,handle:`art-rose`,title:`Art Rose`,description:``,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Rose.png?width=800&v=1782312687`,productsCount:9},{id:`art-ruby`,handle:`art-ruby`,title:`Art Ruby`,description:``,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Ruby.png?width=800&v=1782312470`,productsCount:12},{id:`individual-sets`,handle:`individual-sets`,title:`Forks`,description:null,image:null,productsCount:2},{id:`knives`,handle:`knives`,title:`Knives`,description:null,image:null,productsCount:1}];function ge(e){return e.trim().toLowerCase().replace(/["']/g,``).replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}var _e=[`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Trays_6_Serving_26.png?width=800&v=1782303474`,`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_8_Serving_36.png?width=800&v=1782312207`,`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_6_Serving_50.png?width=800&v=1782311858`,`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_8_Serving_66.png?width=800&v=1782312134`],ve=[{name:`Bottle Opener`,basePrice:480,variationLabel:`Finish`,variations:[`Mirror`,`Half Gold Plated`,`Outline Gold Plated`]},{name:`Service Tong (Mirror)`,basePrice:690,variationLabel:`Size`,variations:[`5" Small`,`7" Medium`,`9" Large`]},{name:`Service Tong (Half Gold Plated)`,basePrice:890,variationLabel:`Size`,variations:[`5" Small`,`7" Medium`,`9" Large`]},{name:`Ice Tong (Mirror)`,basePrice:640,variationLabel:`Size`,variations:[`5" Small`,`7" Medium`,`9" Large`]},{name:`Ice Tong (Half Gold Plated)`,basePrice:840,variationLabel:`Size`,variations:[`5" Small`,`7" Medium`,`9" Large`]},{name:`Steak Fork & Knife (Wooden Handle)`,basePrice:1250,variationLabel:`Size`,variations:[`8 inches`,`9 inches`]},{name:`Kitchen Knife (Wooden Handle)`,basePrice:980,variationLabel:`Size`,variations:[`7 inches`,`8 inches`,`9 inches`]},{name:`Slotted Fork`,basePrice:720,variationLabel:`Size`,variations:[`7 inches`,`8 inches`,`9 inches`]},{name:`Bar B.Q. Skewer 18"`,basePrice:260,variationLabel:`Style`,variations:[`Square`,`Flat`]}].map((e,t)=>{let n=ge(e.name),r=e.variations.map((t,r)=>({id:`${n}-${ge(t)}`,label:t,price:Math.round(e.basePrice*(1+r*.35)*100)/100,compareAtPrice:null,available:!0}));return{id:n,handle:n,name:e.name,price:r[0].price,compareAtPrice:null,available:!0,description:`<p>${e.name} — available in ${r.length} ${e.variationLabel.toLowerCase()} options. Placeholder accessory product for layout only.</p>`,category:`Accessories`,design:null,series:`Accessories`,finish:null,material:null,serving:null,image:_e[t%_e.length],variations:r,variationLabel:e.variationLabel}});function ye(e){return e.trim().toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}var be=[{slug:`art-111`,name:`Art 111`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Valuable_Series_Art_111.png?width=800&v=1782312761`},{slug:`art-jade`,name:`Art Jade`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Jade.png?width=800&v=1782312529`},{slug:`art-pearl`,name:`Art Pearl`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Average_Series_Art_Pearl_outline_gold.png?width=800&v=1782312720`}];function xe(e,t,n){return be.map((r,i)=>({slug:r.slug,name:r.name,image:r.image,variations:t.map((t,a)=>({id:`${e}-${r.slug}-${ye(t)}`,label:t,price:Math.round(n*(1+a*.55)*(1+i*.12)*100)/100,available:!0}))}))}var Se=[{slug:`travelling-kit`,title:`Travelling Kit`,description:`Compact, travel-ready cutlery for life on the move.`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Trays_6_Serving_26.png?width=800&v=1782303474`,variationAxis:`Finish`,variationLabels:[`Half Dull Half Mirror`,`Half Silky Gold Plated`],basePrice:4200},{slug:`service-set`,title:`Service Set`,description:`Serving spoons, ladles, and tongs for the table.`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_8_Serving_36.png?width=800&v=1782312207`,variationAxis:`Size`,variationLabels:[`2 Pcs`,`3 Pcs`],basePrice:3100},{slug:`carving-set`,title:`Carving Set`,description:`Precision carving knives and forks for roasts and joints.`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_6_Serving_50.png?width=800&v=1782311858`,variationAxis:`Size`,variationLabels:[`2 Pcs`,`3 Pcs`],basePrice:3800},{slug:`soup-set`,title:`Soup Set`,description:`Soup spoons and ladles sized for every course.`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_6_Serving_62.png?width=800&v=1782311901`,variationAxis:`Size`,variationLabels:[`10 Pcs for 6 Persons`,`12 Pcs for 8 Persons`,`20 Pcs for 12 Persons`],basePrice:5200},{slug:`pastry-set`,title:`Pastry Set`,description:`Cake forks, servers, and lifters for dessert service.`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_8_Serving_46.png?width=800&v=1782312163`,variationAxis:`Size`,variationLabels:[`14 Pcs for 6 Persons`,`18 Pcs for 8 Persons`,`28 Pcs for 12 Persons`],basePrice:6100},{slug:`steak-set`,title:`Steak Set`,description:`Steak knives and forks built for the table.`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_8_Serving_66.png?width=800&v=1782312134`,variationAxis:`Size`,variationLabels:[`14 Pcs for 6 Persons`,`20 Pcs for 8 Persons`,`26 Pcs for 12 Persons`],basePrice:6800},{slug:`bbq-set`,title:`BBQ Set`,description:`Outdoor and grilling utensils for BBQ season.`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/collections/Cutlery_Sets_8_Serving_80.png?width=800&v=1782312088`,variationAxis:`Size`,variationLabels:[`14 Pcs`,`20 Pcs`,`26 Pcs`],basePrice:5900}].map(e=>({slug:e.slug,title:e.title,description:e.description,image:e.image,variationAxis:e.variationAxis,designs:xe(e.slug,e.variationLabels,e.basePrice)})),C=0;function w(e){return C+=1,`seed-${e}-${C}`}var Ce={Spoon:`Spoon`,"Cake Fork":`Fork`,"Dessert Knife":`Knife`};function we(){let e=new Set([`Spoon`]);for(let t of S)e.add(t.category);e.add(`Accessories`);let t=[`Cutlery Set`,`Spoon`,`Cake Fork`,`Dessert Knife`,`Accessories`];return[...e].sort((e,n)=>{let r=t.indexOf(e),i=t.indexOf(n);return(r===-1?99:r)-(i===-1?99:i)||e.localeCompare(n)}).map((e,t)=>{let n=e===`Cutlery Set`?`cutlery-set`:e===`Accessories`?`accessory`:e in Ce?`individual-item`:`other`;return{id:w(`cat`),slug:x(e),name:e,role:n,individualGroup:n===`individual-item`?Ce[e]??e:null,description:``,image:null,sortOrder:t,isActive:!0}})}function Te(){let e=new Map;for(let t of S)t.design&&!e.has(t.design)&&e.set(t.design,t.series);return he.filter(e=>e.handle.startsWith(`art-`)).map((t,n)=>({id:w(`design`),slug:t.handle,name:t.title,series:e.get(t.title)??null,description:t.description??``,coverImage:t.image,sortOrder:n,isActive:!0}))}function Ee(e){return e.variations?.length?e.variations.map((t,n)=>({id:w(`var`),label:t.label,axis:e.variationLabel??null,price:t.price===e.price?null:t.price,compareAtPrice:t.compareAtPrice??null,available:t.available,sku:null,image:null,sortOrder:n})):[]}function De(e,t,n){return{id:w(`prod`),slug:e.handle,name:e.name,description:e.description,price:e.price,compareAtPrice:e.compareAtPrice,available:e.available,status:`active`,categorySlug:n,designSlug:e.design?x(e.design):null,series:e.series,finish:e.finish,material:e.material,serving:e.serving,image:e.image,images:e.image?[e.image]:[],sortOrder:t,variations:Ee(e)}}function Oe(){let e=S.map((e,t)=>De(e,t,x(e.category))),t=ve.map((e,t)=>De(e,S.length+t,x(`Accessories`)));return[...e,...t]}function ke(){return Se.map((e,t)=>({id:w(`sset`),slug:e.slug,title:e.title,description:e.description,image:e.image,variationAxis:e.variationAxis,sortOrder:t,isActive:!0,designs:e.designs.map((e,t)=>({id:w(`sset-design`),slug:e.slug,name:e.name,image:e.image,sortOrder:t,variations:e.variations.map((e,t)=>({id:w(`sset-var`),label:e.label,price:e.price,available:e.available,sortOrder:t}))}))}))}function Ae(){return C=0,{baseDesigns:Te(),categories:we(),products:Oe(),specialtySets:ke(),updatedAt:new Date(0).toISOString()}}var je=`cocktail:catalog:v1`,T=Ne(),E={source:`local`,ready:!_,syncing:!1,error:null},D=new Set,O=()=>{},Me=new Promise(e=>{O=e});E.ready&&O();function Ne(){try{let e=localStorage.getItem(je);if(e){let t=JSON.parse(e);if(t&&Array.isArray(t.products)&&Array.isArray(t.baseDesigns))return t}}catch{}return Ae()}function Pe(){try{localStorage.setItem(je,JSON.stringify(T))}catch{}}function k(){for(let e of D)e()}function A(e,t){T={...e,updatedAt:new Date().toISOString()},Pe(),k(),t&&_&&(E={...E,syncing:!0},t().then(()=>{E={...E,syncing:!1,error:null}}).catch(e=>{E={...E,syncing:!1,error:e instanceof Error?e.message:String(e)},console.warn(`[catalog] remote sync failed`,e)}).finally(k))}function j(){return T}function Fe(){return E}function Ie(e){return D.add(e),()=>D.delete(e)}var Le=!1;async function Re(){if(Le)return Me;if(Le=!0,!_){E={...E,ready:!0},O(),k();return}E={...E,syncing:!0},k();try{let e=await m(()=>import(`./catalogRemote-BvwiG6JS.js`),__vite__mapDeps([0,1,2,3,4,5])),t=await e.getRemoteClient(),n=await e.fetchSnapshot(t);n?(T=n,Pe()):await e.pushSnapshot(t,T),E={source:`supabase`,ready:!0,syncing:!1,error:null}}catch(e){E={source:`local`,ready:!0,syncing:!1,error:e instanceof Error?e.message:String(e)},console.warn(`[catalog] Supabase init failed, using local data`,e)}O(),k()}async function M(e,t){let n=await m(()=>import(`./catalogRemote-BvwiG6JS.js`),__vite__mapDeps([0,1,2,3,4,5])),r=await n.getRemoteClient();await n.upsertRow(r,e,t)}async function N(e,t){let n=await m(()=>import(`./catalogRemote-BvwiG6JS.js`),__vite__mapDeps([0,1,2,3,4,5])),r=await n.getRemoteClient();await n.deleteRow(r,e,t)}function P(e){return e.reduce((e,t)=>Math.max(e,t.sortOrder),-1)+1}function F(){try{return crypto.randomUUID()}catch{return`id-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}}function ze(e){let t=e.id?T.baseDesigns.find(t=>t.id===e.id):void 0,n={id:t?.id??F(),slug:e.slug?.trim()||x(e.name),name:e.name.trim(),series:e.series?.trim()||null,description:e.description??t?.description??``,coverImage:e.coverImage??t?.coverImage??null,sortOrder:e.sortOrder??t?.sortOrder??P(T.baseDesigns),isActive:e.isActive??t?.isActive??!0},r=t?T.baseDesigns.map(e=>e.id===n.id?n:e):[...T.baseDesigns,n];return A({...T,baseDesigns:r},()=>M(`base_designs`,I.baseDesign(n))),n}function Be(e){A({...T,baseDesigns:T.baseDesigns.filter(t=>t.id!==e)},()=>N(`base_designs`,e))}function Ve(e){let t=e.id?T.categories.find(t=>t.id===e.id):void 0,n={id:t?.id??F(),slug:e.slug?.trim()||x(e.name),name:e.name.trim(),role:e.role,individualGroup:e.role===`individual-item`?e.individualGroup?.trim()||e.name.trim():null,description:e.description??t?.description??``,image:e.image??t?.image??null,sortOrder:e.sortOrder??t?.sortOrder??P(T.categories),isActive:e.isActive??t?.isActive??!0},r=t?T.categories.map(e=>e.id===n.id?n:e):[...T.categories,n];return A({...T,categories:r},()=>M(`categories`,I.category(n))),n}function He(e){A({...T,categories:T.categories.filter(t=>t.id!==e)},()=>N(`categories`,e))}function Ue(e,t){return e?e.map((e,n)=>{let r=e.id?t.find(t=>t.id===e.id):void 0;return{id:r?.id??F(),label:e.label.trim(),axis:e.axis?.trim()||r?.axis||null,price:e.price??r?.price??null,compareAtPrice:e.compareAtPrice??r?.compareAtPrice??null,available:e.available??r?.available??!0,sku:e.sku?.trim()||r?.sku||null,image:e.image??r?.image??null,sortOrder:e.sortOrder??n}}):t}function We(e){let t=e.id?T.products.find(t=>t.id===e.id):void 0,n=e.image??t?.image??null,r=e.images??t?.images??(n?[n]:[]),i={id:t?.id??F(),slug:e.slug?.trim()||x(e.name),name:e.name.trim(),description:e.description??t?.description??``,price:Number(e.price??t?.price??0),compareAtPrice:e.compareAtPrice??t?.compareAtPrice??null,available:e.available??t?.available??!0,status:e.status??t?.status??`active`,categorySlug:e.categorySlug,designSlug:e.designSlug??t?.designSlug??null,series:e.series??t?.series??null,finish:e.finish??t?.finish??null,material:e.material??t?.material??null,serving:e.serving??t?.serving??null,image:n,images:r,sortOrder:e.sortOrder??t?.sortOrder??P(T.products),variations:Ue(e.variations,t?.variations??[])},a=t?T.products.map(e=>e.id===i.id?i:e):[...T.products,i];return A({...T,products:a},()=>M(`products`,I.product(i))),i}function Ge(e){A({...T,products:T.products.filter(t=>t.id!==e)},()=>N(`products`,e))}function Ke(e){let t=e.id?T.specialtySets.find(t=>t.id===e.id):void 0,n={id:t?.id??F(),slug:e.slug?.trim()||x(e.title),title:e.title.trim(),description:e.description??t?.description??``,image:e.image??t?.image??null,variationAxis:e.variationAxis??t?.variationAxis??`Size`,sortOrder:e.sortOrder??t?.sortOrder??P(T.specialtySets),isActive:e.isActive??t?.isActive??!0,designs:(e.designs??t?.designs??[]).map((e,t)=>({id:e.id??F(),slug:e.slug?.trim()||x(e.name),name:e.name.trim(),image:e.image??null,sortOrder:e.sortOrder??t,variations:(e.variations??[]).map((e,t)=>({id:e.id??F(),label:e.label.trim(),price:Number(e.price??0),available:e.available??!0,sortOrder:e.sortOrder??t}))}))},r=t?T.specialtySets.map(e=>e.id===n.id?n:e):[...T.specialtySets,n];return A({...T,specialtySets:r},()=>M(`specialty_sets`,I.specialtySet(n))),n}function qe(e){A({...T,specialtySets:T.specialtySets.filter(t=>t.id!==e)},()=>N(`specialty_sets`,e))}function Je(){A(Ae())}async function Ye(){if(!_)throw Error(`Supabase is not configured (set VITE_SUPABASE_* in .env.local)`);E={...E,syncing:!0},k();try{let e=await m(()=>import(`./catalogRemote-BvwiG6JS.js`),__vite__mapDeps([0,1,2,3,4,5])),t=await e.getRemoteClient();await e.pushSnapshot(t,T),E={source:`supabase`,ready:!0,syncing:!1,error:null}}catch(e){throw E={...E,syncing:!1,error:e instanceof Error?e.message:String(e)},e}finally{k()}}function Xe(){return JSON.stringify(T,null,2)}function Ze(e){let t=JSON.parse(e);if(!Array.isArray(t.products)||!Array.isArray(t.baseDesigns))throw Error(`Not a valid catalog export`);A(t)}var I={baseDesign:e=>({id:e.id,slug:e.slug,name:e.name,series:e.series,description:e.description,cover_image:e.coverImage,sort_order:e.sortOrder,is_active:e.isActive}),category:e=>({id:e.id,slug:e.slug,name:e.name,role:e.role,individual_group:e.individualGroup,description:e.description,image:e.image,sort_order:e.sortOrder,is_active:e.isActive}),product:e=>({id:e.id,slug:e.slug,name:e.name,description:e.description,price:e.price,compare_at_price:e.compareAtPrice,available:e.available,status:e.status,category_slug:e.categorySlug,design_slug:e.designSlug,series:e.series,finish:e.finish,material:e.material,serving:e.serving,image:e.image,images:e.images,sort_order:e.sortOrder,variations:e.variations}),specialtySet:e=>({id:e.id,slug:e.slug,title:e.title,description:e.description,image:e.image,variation_axis:e.variationAxis,sort_order:e.sortOrder,is_active:e.isActive,designs:e.designs})};function L(e){let t=new WeakMap;return n=>(t.has(n)||t.set(n,e(n)),t.get(n))}function R(e){let t=new Map(e.categories.map(e=>[e.slug,e])),n=new Map(e.baseDesigns.map(e=>[e.slug,e.name]));return{categoryName:e=>t.get(e)?.name??e,designName:e=>n.get(e)??null,role:e=>t.get(e)?.role??`other`}}function z(e,t){let n=e.variations.slice().sort((e,t)=>e.sortOrder-t.sortOrder),r=n.length?n.map(t=>({id:t.id,label:t.label,price:t.price??e.price,compareAtPrice:t.compareAtPrice,available:t.available,image:t.image??null})):void 0;return{id:e.slug,handle:e.slug,name:e.name,price:e.price,compareAtPrice:e.compareAtPrice,available:e.available&&e.status===`active`,description:e.description,category:t.categoryName(e.categorySlug),design:e.designSlug?t.designName(e.designSlug):null,series:e.series,finish:e.finish,material:e.material,serving:e.serving,image:e.image,variations:r,variationLabel:r?n[0]?.axis??void 0:void 0}}var B=e=>e.status===`active`;function Qe(e,t){let n=R(e);return t.map(e=>z(e,n))}var $e=L(e=>{let t=R(e);return e.products.filter(e=>B(e)&&t.role(e.categorySlug)===`accessory`).sort((e,t)=>e.sortOrder-t.sortOrder).map(e=>z(e,t))}),et=L(e=>{let t=R(e);return e.products.filter(B).sort((e,t)=>e.sortOrder-t.sortOrder).map(e=>z(e,t))}),tt=L(e=>{let t=e.products.filter(B);return e.baseDesigns.filter(e=>e.isActive).slice().sort((e,t)=>e.sortOrder-t.sortOrder).flatMap(e=>[...new Set(t.filter(t=>t.designSlug===e.slug&&t.finish).map(e=>e.finish))].sort().map(n=>{let r=t.find(t=>t.designSlug===e.slug&&t.finish===n&&t.image),i=`${e.slug}-${x(n)}`;return{id:i,slug:i,name:`${e.name} — ${n}`,coverImage:r?.image??e.coverImage,baseSlug:e.slug,baseName:e.name,finish:n}}))}),V=L(e=>e.specialtySets.filter(e=>e.isActive).slice().sort((e,t)=>e.sortOrder-t.sortOrder).map(e=>({slug:e.slug,title:e.title,description:e.description,image:e.image,variationAxis:e.variationAxis,designs:e.designs.slice().sort((e,t)=>e.sortOrder-t.sortOrder).map(e=>({slug:e.slug,name:e.name,image:e.image,variations:e.variations.slice().sort((e,t)=>e.sortOrder-t.sortOrder).map(e=>({id:e.id,label:e.label,price:e.price,available:e.available}))}))}))),nt=L(e=>V(e).flatMap(e=>e.designs.flatMap(t=>t.variations.map(n=>({id:`${e.slug}-${t.slug}-${x(n.label)}`,handle:`${e.slug}-${t.slug}-${x(n.label)}`,name:`${e.title} - ${t.name} - ${n.label}`,price:n.price,compareAtPrice:null,available:n.available,description:`<p>Placeholder ${e.title} in the ${t.name} design — ${n.label}.</p>`,category:e.title,design:t.name,series:`Specialty`,finish:e.variationAxis===`Finish`?n.label:null,material:null,serving:n.label,image:t.image})))));function rt(e,t){return nt(e).filter(e=>e.id.startsWith(`${t}-`))}function H(){return(0,v.useSyncExternalStore)(Ie,j,j)}function it(){return(0,v.useSyncExternalStore)(Ie,Fe,Fe)}function at(){let e=H();return(0,v.useMemo)(()=>tt(e),[e])}function ot(){let e=H();return(0,v.useMemo)(()=>V(e),[e])}function st(){let e=at(),t=ot();return(0,v.useMemo)(()=>pe(e,t),[e,t])}var ct={name:`Cocktail`,slogan:`Quality Tableware`,logo:`https://cdn.shopify.com/s/files/1/0843/7533/9248/files/cocktail_1.png?width=200&v=1781344739`,phone:`+92 301 8617931`,phoneHref:`tel:+923018617931`,email:`info@cocktailcutlery.com`,location:`Sialkot, Punjab, Pakistan`,currency:`PKR`,currencySymbol:`Rs.`},lt=[{id:`slide-1`,image:`https://oefkvboqxrokifztdizy.supabase.co/storage/v1/object/public/product-images/hero/1788966333655-6l1vb2.webp`,heading:`Timeless Table Essentials`,cta:{label:`Shop All`,href:`/shop`}}],ut=[{heading:`Crafted for Every Table`,body:`Every meal deserves cutlery that feels as exceptional as the food it serves. Our thoughtfully crafted collections combine timeless design, balanced weight, and lasting durability to elevate everyday dining and special occasions alike.`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/files/1_fbc7b45a-76fa-412f-9cff-c644e2b658b3.png?width=800&v=1783205080`},{heading:`Premium Stainless Steel. Lasting Performance.`,body:`Made from food-grade stainless steel with precision craftsmanship, every piece is designed to resist corrosion, maintain its shine, and deliver years of dependable performance without compromising on elegance.`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/files/2.png?width=800&v=1783205080`},{heading:`From Family Dinners to Fine Dining`,body:`Whether you're setting the table at home, serving guests in a restaurant, or selecting the perfect gift, our versatile designs complement every style and every occasion with effortless sophistication.`,image:`https://cdn.shopify.com/s/files/1/0843/7533/9248/files/3.png?width=800&v=1783205081`}],dt=[{label:`Food Grade`,icon:`Leaf`},{label:`Rust Resistant`,icon:`ShieldCheck`},{label:`Since 1967`,icon:`Award`},{label:`Premium Finish`,icon:`Sparkles`}],ft=`cutlery-set-art-111-outline-gold-plated-34-pcs-6-serving`,pt={title:`Our Story`,sections:[{heading:`Background`,paragraphs:[`In the year 1940, during a time prior to partition of the sub-continent, Muhammad Sarwar Dar worked as a layman in a metal casting unit that was owned by a Hindu foundry owner. He spent his day and night working hard in that unit and learned about how the business was being run. By 1945, through his hard work and determination, he gained a significant amount of understanding due his experience and optimistic frame of mind.`,`His visionary mentality and highly motivated outlook on matters lead him to eventually purchase the unit that he was employed in and start running the business on his own. His continuous struggle for excellence turned it into a success. He named this achievement of his, DAR FOUNDRY WORKS.`,`In the 1960’s, Muhammad Sarwar Dar took hold of the opportunity that came in the form of a government scheme that aided small and medium sized industries. By collaborating with PSIC (Punjab Small Industries Corporation), he decided to venture further into the metal works industry using the expertise he had gained thus far in this field of work. By 1965, two plots were leased for the construction of a cutlery manufacturing unit which was named, DAR CUTLERY WORKS.`,`Due to his undying dedication towards his work, untiring efforts and desire to provide people with the best quality products and services, Dar Cutlery Works grew from a small and modest start to the high quality renowned business that it is today. Under the brand name COCKTAIL and conforming to the slogan ‘Quality Tableware’, the business excels at providing cutlery of unmatchable quality to customers that deserve no less than the best.`]},{heading:`Our Vision`,paragraphs:[`To make ‘Cocktail’ a brand that is known for providing utmost quality & value and to become an unrivalled industry leader by achieving superior results for our customers, employees and communities.`]},{heading:`Our Values`,list:[`No compromise on product quality`,`Focus on self-improvement`,`Honesty & transparency`,`Discipline, fairness & equality`,`Providing Employee Benefits`]},{heading:`Our Mission`,paragraphs:[`To deliver superior value to our customers by providing them with premium quality product and unsurpassed service. To incorporate employees with the highest level of integrity and satisfaction. To pursue excellence in everything we do.`]}]},U={title:`Gift Collection`,heading:`Elegant Gifts for Every Occasion`,intro:`A truly memorable gift reflects care, appreciation, and timeless style. Cocktail's premium cutlery gift sets are thoughtfully designed to make weddings, anniversaries, birthdays, housewarming celebrations, Eid, and other special occasions even more meaningful.`,sections:[{heading:`Crafted with Premium Quality`,body:`Every gift set is manufactured using high-quality materials and exceptional craftsmanship. Combining durability with a refined finish, our products are designed to enhance every dining experience while maintaining their elegance for years to come.`},{heading:`Perfect for Corporate Gifting`,body:`Strengthen business relationships with sophisticated corporate gift sets that leave a lasting impression. Whether you're recognizing employees, thanking clients, or celebrating company milestones, Cocktail offers premium gifting solutions that represent professionalism and excellence.`}]},mt=`cocktail:content:v1`,W=`site`,G={brand:{...ct},heroSlides:lt.map(e=>({...e})),brandFeatures:ut.map(e=>({...e})),whyChooseUs:dt.map(e=>({...e})),featuredProductHandle:ft,ourStory:{title:pt.title,sections:pt.sections.map(e=>({heading:e.heading,paragraphs:`paragraphs`in e?[...e.paragraphs??[]]:void 0,list:`list`in e?[...e.list??[]]:void 0}))},specialOccasionGifts:{title:U.title,heading:U.heading,intro:U.intro,sections:U.sections.map(e=>({heading:e.heading,paragraphs:[e.body]}))}},K=new Set,q=ht();function ht(){try{let e=localStorage.getItem(mt);if(e)return J(G,JSON.parse(e))}catch{}return G}function J(e,t){return{brand:{...e.brand,...t.brand},heroSlides:t.heroSlides??e.heroSlides,brandFeatures:t.brandFeatures??e.brandFeatures,whyChooseUs:t.whyChooseUs??e.whyChooseUs,featuredProductHandle:t.featuredProductHandle??e.featuredProductHandle,ourStory:t.ourStory??e.ourStory,specialOccasionGifts:t.specialOccasionGifts??e.specialOccasionGifts}}function Y(){try{localStorage.setItem(mt,JSON.stringify(q))}catch{}}function X(){return q}function gt(e){return K.add(e),()=>K.delete(e)}function _t(e){q=J(q,e),Y();for(let e of K)e();return _&&vt(),q}async function vt(){try{let{getSupabaseClient:e}=await m(async()=>{let{getSupabaseClient:e}=await import(`./supabaseClient-CxbrJDt6.js`).then(e=>e.n);return{getSupabaseClient:e}},__vite__mapDeps([4,2,1,3,5]));await(await e()).from(`content_blocks`).upsert({key:W,data:q})}catch(e){console.warn(`[content] remote save failed`,e)}}var yt=!1;async function bt(){if(!yt&&_){yt=!0;try{let{getSupabaseClient:e}=await m(async()=>{let{getSupabaseClient:e}=await import(`./supabaseClient-CxbrJDt6.js`).then(e=>e.n);return{getSupabaseClient:e}},__vite__mapDeps([4,2,1,3,5])),t=await e(),{data:n}=await t.from(`content_blocks`).select(`data`).eq(`key`,W).maybeSingle();if(n?.data){q=J(G,n.data),Y();for(let e of K)e()}else await t.from(`content_blocks`).upsert({key:W,data:q})}catch(e){console.warn(`[content] init failed`,e)}}}function xt(){q=G,Y();for(let e of K)e();_&&vt()}function Z(){return(0,v.useSyncExternalStore)(gt,X,X)}var St=e(te(),1);function Q({isOpen:e,onClose:t,title:n,side:r=`right`,children:i}){let a=(0,v.useRef)(null),[o,s]=(0,v.useState)(e);return(0,v.useEffect)(()=>{e&&s(!0)},[e]),(0,v.useEffect)(()=>{if(!e)return;let n=document.body.style.overflow;document.body.style.overflow=`hidden`,a.current?.focus();let r=e=>{e.key===`Escape`&&t()};return document.addEventListener(`keydown`,r),()=>{document.body.style.overflow=n,document.removeEventListener(`keydown`,r)}},[e,t]),o?(0,St.createPortal)((0,y.jsxs)(`div`,{className:`fixed inset-0 z-50 ${e?``:`pointer-events-none`}`,role:`dialog`,"aria-modal":`true`,"aria-label":n,"aria-hidden":!e,children:[(0,y.jsx)(`div`,{className:`absolute inset-0 bg-black/40 transition-opacity duration-300 ${e?`opacity-100`:`opacity-0`}`,onClick:t}),(0,y.jsxs)(`div`,{className:`absolute top-0 ${r===`right`?`right-0`:`left-0`} flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ease-out ${e?`translate-x-0`:r===`right`?`translate-x-full`:`-translate-x-full`}`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between border-b border-neutral-200 px-5 py-4`,children:[(0,y.jsx)(`h2`,{className:`text-sm font-semibold uppercase tracking-wide`,children:n}),(0,y.jsx)(`button`,{ref:a,onClick:t,"aria-label":`Close`,className:`rounded-full p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red`,children:(0,y.jsx)(l,{size:20})})]}),(0,y.jsx)(`div`,{className:`flex-1 overflow-y-auto`,children:i})]})]}),document.body):null}function Ct({isOpen:e,onClose:t}){let[r,i]=(0,v.useState)(null),[a,s]=(0,v.useState)(null),c=st(),{brand:l}=Z();return(0,y.jsx)(Q,{isOpen:e,onClose:t,title:`Menu`,side:`left`,children:(0,y.jsxs)(`nav`,{"aria-label":`Mobile navigation`,className:`flex flex-col`,children:[(0,y.jsx)(`ul`,{className:`divide-y divide-neutral-100`,children:c.map(e=>(0,y.jsx)(`li`,{children:e.megaMenu?(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`button`,{className:`flex w-full items-center justify-between px-5 py-4 text-left text-base`,"aria-expanded":r===e.label,onClick:()=>i(r===e.label?null:e.label),children:[e.label,(0,y.jsx)(n,{size:18,className:`transition-transform duration-200 ${r===e.label?`rotate-180`:``}`})]}),r===e.label&&(0,y.jsxs)(`div`,{className:`bg-neutral-50 pb-2`,children:[(0,y.jsx)(h,{to:e.href,onClick:t,className:`block px-8 py-2.5 text-sm font-medium text-brand-red`,children:`Shop All`}),e.megaMenu.map(e=>(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`button`,{className:`flex w-full items-center justify-between px-8 py-2.5 text-left text-sm font-semibold text-neutral-900`,"aria-expanded":a===e.heading,onClick:()=>s(a===e.heading?null:e.heading),children:[e.heading,(0,y.jsx)(n,{size:14,className:`transition-transform duration-200 ${a===e.heading?`rotate-180`:``}`})]}),a===e.heading&&(0,y.jsx)(`ul`,{children:e.links.map(e=>(0,y.jsx)(`li`,{children:(0,y.jsx)(h,{to:e.href,onClick:t,className:`block px-11 py-2 text-sm text-neutral-700`,children:e.label})},e.href))})]},e.heading))]})]}):e.children?(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`button`,{className:`flex w-full items-center justify-between px-5 py-4 text-left text-base`,"aria-expanded":r===e.label,onClick:()=>i(r===e.label?null:e.label),children:[e.label,(0,y.jsx)(n,{size:18,className:`transition-transform duration-200 ${r===e.label?`rotate-180`:``}`})]}),r===e.label&&(0,y.jsx)(`ul`,{className:`bg-neutral-50 pb-2`,children:e.children.map(e=>(0,y.jsx)(`li`,{children:(0,y.jsx)(h,{to:e.href,onClick:t,className:`block px-8 py-3 text-sm text-neutral-700`,children:e.label})},e.href))})]}):(0,y.jsx)(h,{to:e.href,onClick:t,className:`block px-5 py-4 text-base`,children:e.label})},e.label))}),(0,y.jsxs)(`div`,{className:`mt-4 space-y-3 border-t border-neutral-100 px-5 py-5 text-sm text-neutral-600`,children:[(0,y.jsxs)(`a`,{href:l.phoneHref,className:`flex items-center gap-2`,children:[(0,y.jsx)(o,{size:16}),` `,l.phone]}),(0,y.jsxs)(`a`,{href:`mailto:${l.email}`,className:`flex items-center gap-2`,children:[(0,y.jsx)(d,{size:16}),` `,l.email]})]})]})})}function wt({columns:e}){return(0,y.jsx)(`div`,{className:`invisible absolute left-1/2 top-full z-10 w-[560px] max-w-[90vw] -translate-x-1/2 translate-y-1 border border-neutral-100 bg-white opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100`,children:(0,y.jsx)(`div`,{className:`grid grid-cols-3 gap-6 p-6`,children:e.map(e=>(0,y.jsxs)(`div`,{children:[e.href?(0,y.jsx)(h,{to:e.href,className:`mb-3 block text-sm font-semibold text-neutral-900 hover:text-brand-red`,children:e.heading}):(0,y.jsx)(`p`,{className:`mb-3 text-sm font-semibold text-neutral-900`,children:e.heading}),(0,y.jsx)(`ul`,{className:`space-y-2`,children:e.links.map(e=>(0,y.jsx)(`li`,{children:(0,y.jsx)(h,{to:e.href,className:`text-sm text-neutral-600 hover:text-brand-red`,children:e.label})},e.href))})]},e.heading))})})}var Tt=(0,v.lazy)(()=>m(()=>import(`./SearchOverlay-CMuqU4-r.js`).then(e=>({default:e.SearchOverlay})),__vite__mapDeps([6,2,3,7,1,8,9])));function Et(){let[e,t]=(0,v.useState)(!1),[n,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(!1),[l,u]=(0,v.useState)(!1),{itemCount:d,openCart:f}=b(),te=st(),{brand:p}=Z();return(0,v.useEffect)(()=>{let e=()=>u(window.scrollY>8);return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`header`,{className:`sticky top-0 z-40 bg-white transition-shadow duration-200 ${l?`shadow-[0_1px_8px_rgba(0,0,0,0.08)]`:``}`,children:(0,y.jsxs)(`div`,{className:`mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8`,children:[(0,y.jsx)(`div`,{className:`flex items-center gap-2 lg:hidden`,children:(0,y.jsx)(`button`,{"aria-label":`Open menu`,onClick:()=>t(!0),className:`-ml-2 flex h-10 w-10 items-center justify-center text-black`,children:(0,y.jsx)(r,{size:22})})}),(0,y.jsxs)(h,{to:`/`,className:`flex items-center gap-2`,"aria-label":`${p.name} home`,children:[(0,y.jsx)(`img`,{src:p.logo,alt:p.name,width:40,height:40,className:`h-9 w-9 object-contain lg:h-10 lg:w-10`}),(0,y.jsx)(`span`,{className:`text-lg font-semibold tracking-wide uppercase lg:text-xl`,children:p.name})]}),(0,y.jsx)(`nav`,{className:`hidden items-center gap-7 lg:flex`,"aria-label":`Main navigation`,children:te.map(e=>e.megaMenu?(0,y.jsxs)(`div`,{className:`group relative py-2`,children:[(0,y.jsx)(h,{to:e.href,className:`flex items-center gap-1 text-sm font-medium text-neutral-800 transition-colors hover:text-brand-red`,children:e.label}),(0,y.jsx)(wt,{columns:e.megaMenu})]},e.label):e.children?(0,y.jsxs)(`div`,{className:`group relative py-2`,children:[(0,y.jsx)(`button`,{className:`flex items-center gap-1 text-sm font-medium text-neutral-800 transition-colors hover:text-brand-red`,children:e.label}),(0,y.jsx)(`div`,{className:`invisible absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 translate-y-1 border border-neutral-100 bg-white opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100`,children:(0,y.jsx)(`ul`,{className:`py-2`,children:e.children.map(e=>(0,y.jsx)(`li`,{children:(0,y.jsx)(h,{to:e.href,className:`block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-brand-red`,children:e.label})},e.href))})})]},e.label):(0,y.jsx)(ie,{to:e.href,end:e.href===`/`,className:({isActive:e})=>`text-sm font-medium transition-colors hover:text-brand-red ${e?`text-brand-red`:`text-neutral-800`}`,children:e.label},e.href))}),(0,y.jsxs)(`div`,{className:`flex items-center gap-1 sm:gap-2`,children:[(0,y.jsx)(`button`,{"aria-label":`Search`,onClick:()=>{s(!0),a(!0)},className:`flex h-10 w-10 items-center justify-center text-neutral-800 transition-colors hover:text-brand-red`,children:(0,y.jsx)(ee,{size:20})}),(0,y.jsx)(`a`,{href:`#account`,"aria-label":`Account`,className:`hidden h-10 w-10 items-center justify-center text-neutral-800 transition-colors hover:text-brand-red sm:flex`,children:(0,y.jsx)(c,{size:20})}),(0,y.jsxs)(`button`,{"aria-label":`Open cart, ${d} item${d===1?``:`s`}`,onClick:f,className:`relative flex h-10 w-10 items-center justify-center text-neutral-800 transition-colors hover:text-brand-red`,children:[(0,y.jsx)(i,{size:20}),d>0&&(0,y.jsx)(`span`,{className:`absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-red px-1 text-[10px] font-bold text-white`,children:d})]})]})]})}),(0,y.jsx)(Ct,{isOpen:e,onClose:()=>t(!1)}),o&&(0,y.jsx)(v.Suspense,{fallback:null,children:(0,y.jsx)(Tt,{isOpen:n,onClose:()=>a(!1)})})]})}function Dt(){let{brand:e}=Z();return(0,y.jsx)(`footer`,{className:`bg-black text-white`,children:(0,y.jsxs)(`div`,{className:`mx-auto max-w-[1200px] px-6 py-14 sm:py-16`,children:[(0,y.jsx)(`div`,{className:`mb-10 flex justify-center`,children:(0,y.jsx)(`img`,{src:e.logo,alt:e.name,width:64,height:64,className:`h-12 w-12 object-contain`})}),(0,y.jsxs)(`div`,{className:`mb-10 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16`,children:[(0,y.jsxs)(`a`,{href:e.phoneHref,className:`flex flex-col items-center gap-2 text-sm text-neutral-200 hover:text-white`,children:[(0,y.jsx)(o,{size:26,className:`text-brand-red`}),e.phone]}),(0,y.jsxs)(`a`,{href:`mailto:${e.email}`,className:`flex flex-col items-center gap-2 text-sm text-neutral-200 hover:text-white`,children:[(0,y.jsx)(d,{size:26,className:`text-brand-red`}),e.email]}),(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-2 text-sm text-neutral-200`,children:[(0,y.jsx)(u,{size:26,className:`text-brand-red`}),e.location]})]}),(0,y.jsx)(`nav`,{"aria-label":`Footer`,className:`flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm`,children:me.map(e=>(0,y.jsx)(h,{to:e.href,className:`text-neutral-200 hover:text-white hover:underline`,children:e.label},e.href))}),(0,y.jsxs)(`p`,{className:`mt-10 text-center text-xs text-neutral-500`,children:[`© `,new Date().getFullYear(),` `,e.name,`. `,e.slogan,`.`]})]})})}function $(e){return`${X().brand.currencySymbol}${e.toLocaleString(`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2})}`}function Ot(e,t){if(!e)return null;try{let n=new URL(e);return n.searchParams.set(`width`,String(t)),n.toString()}catch{return e}}function kt({quantity:e,onChange:t,min:n=1,max:r=99,size:i=`md`}){let o=i===`sm`?`h-9`:`h-12`,c=i===`sm`?`w-8`:`w-11`;return(0,y.jsxs)(`div`,{className:`inline-flex ${o} items-stretch border border-neutral-300`,children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(Math.max(n,e-1)),disabled:e<=n,"aria-label":`Decrease quantity`,className:`flex ${c} items-center justify-center text-neutral-600 transition-colors hover:bg-neutral-100 disabled:opacity-30`,children:(0,y.jsx)(s,{size:14})}),(0,y.jsx)(`span`,{className:`flex w-10 items-center justify-center text-sm font-medium tabular-nums`,"aria-live":`polite`,children:e}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(Math.min(r,e+1)),disabled:e>=r,"aria-label":`Increase quantity`,className:`flex ${c} items-center justify-center text-neutral-600 transition-colors hover:bg-neutral-100 disabled:opacity-30`,children:(0,y.jsx)(a,{size:14})})]})}function At({item:e}){let{updateQuantity:t,removeItem:n}=b(),{product:r,quantity:i}=e;return(0,y.jsxs)(`div`,{className:`flex gap-4 py-5`,children:[(0,y.jsx)(h,{to:`/product/${r.handle}`,className:`h-24 w-24 shrink-0 overflow-hidden bg-neutral-100`,children:r.image&&(0,y.jsx)(`img`,{src:Ot(r.image,200)??void 0,alt:r.name,loading:`lazy`,className:`h-full w-full object-cover`})}),(0,y.jsxs)(`div`,{className:`flex flex-1 flex-col justify-between`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,y.jsx)(h,{to:`/product/${r.handle}`,className:`text-sm text-neutral-800 hover:underline`,children:r.name}),(0,y.jsx)(`button`,{onClick:()=>n(r.id),"aria-label":`Remove ${r.name} from cart`,className:`shrink-0 p-1 text-neutral-400 hover:text-black`,children:(0,y.jsx)(l,{size:16})})]}),(0,y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,y.jsx)(kt,{size:`sm`,quantity:i,onChange:e=>t(r.id,e)}),(0,y.jsx)(`span`,{className:`text-sm font-semibold text-neutral-900`,children:$(r.price*i)})]})]})]})}var jt={primary:`bg-brand-red text-white hover:bg-brand-red-dark disabled:bg-neutral-300`,secondary:`bg-brand-navy text-white hover:bg-brand-navy/90 disabled:bg-neutral-300`,outline:`border border-black text-black hover:bg-black hover:text-white disabled:border-neutral-300 disabled:text-neutral-400`,ghost:`text-black hover:bg-neutral-100 disabled:text-neutral-400`},Mt={sm:`h-9 px-4 text-xs`,md:`h-12 px-6 text-sm`,lg:`h-14 px-8 text-base`},Nt=(0,v.forwardRef)(function({variant:e=`primary`,size:t=`md`,className:n=``,...r},i){return(0,y.jsx)(`button`,{ref:i,className:`inline-flex items-center justify-center gap-2 font-medium tracking-wide uppercase transition-colors duration-200 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${jt[e]} ${Mt[t]} ${n}`,...r})});function Pt({subtotal:e,onCheckout:t}){let[n,r]=(0,v.useState)(!1);return(0,y.jsxs)(`div`,{className:`border-t border-neutral-200 px-5 py-5`,children:[(0,y.jsxs)(`div`,{className:`mb-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-base font-semibold`,children:[(0,y.jsx)(`span`,{children:`Subtotal`}),(0,y.jsx)(`span`,{children:$(e)})]}),(0,y.jsx)(`p`,{className:`mb-4 text-xs text-neutral-500`,children:`Discounts and shipping calculated at checkout.`}),_?(0,y.jsx)(h,{to:`/checkout`,onClick:t,className:`flex h-14 w-full items-center justify-center bg-brand-red text-base font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark`,children:`Checkout`}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Nt,{variant:`primary`,size:`lg`,className:`w-full`,onClick:()=>r(!0),children:`Checkout — Coming Soon`}),n&&(0,y.jsx)(`p`,{role:`status`,className:`mt-3 text-center text-xs text-neutral-500`,children:`Checkout will be available once this storefront is connected to a backend.`})]})]})}function Ft(){let{items:e,isOpen:t,closeCart:n,subtotal:r}=b();return(0,y.jsx)(Q,{isOpen:t,onClose:n,title:`Your Cart${e.length?` (${e.length})`:``}`,children:e.length===0?(0,y.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-4 px-6 py-16 text-center`,children:[(0,y.jsx)(i,{size:40,strokeWidth:1,className:`text-neutral-300`}),(0,y.jsx)(`p`,{className:`text-neutral-600`,children:`Your cart is empty.`}),(0,y.jsx)(h,{to:`/shop`,onClick:n,className:`inline-flex h-12 items-center justify-center border border-black px-6 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-black hover:text-white`,children:`Continue Shopping`})]}):(0,y.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,y.jsx)(`ul`,{className:`flex-1 divide-y divide-neutral-100 px-5`,children:e.map(e=>(0,y.jsx)(`li`,{children:(0,y.jsx)(At,{item:e})},e.product.id))}),(0,y.jsx)(Pt,{subtotal:r,onCheckout:n})]})})}function It(){let{pathname:e}=re();return(0,v.useEffect)(()=>{window.scrollTo(0,0)},[e]),(0,y.jsxs)(`div`,{className:`flex min-h-screen flex-col`,children:[(0,y.jsx)(Et,{}),(0,y.jsx)(`main`,{className:`flex-1`,children:(0,y.jsx)(ne,{})}),(0,y.jsx)(Dt,{}),(0,y.jsx)(Ft,{})]})}function Lt({count:e=8}){return(0,y.jsx)(`div`,{className:`grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4`,"aria-hidden":`true`,children:Array.from({length:e}).map((e,t)=>(0,y.jsxs)(`div`,{className:`animate-pulse`,children:[(0,y.jsx)(`div`,{className:`aspect-square w-full bg-neutral-100`}),(0,y.jsx)(`div`,{className:`mt-3 h-3 w-3/4 bg-neutral-100`}),(0,y.jsx)(`div`,{className:`mt-2 h-3 w-1/3 bg-neutral-100`})]},t))})}function Rt({className:e=``}){return(0,y.jsx)(`span`,{role:`status`,"aria-label":`Loading`,className:`inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent ${e}`})}var zt=(0,v.lazy)(()=>m(()=>import(`./Home-CcHLxdR6.js`),__vite__mapDeps([10,2,3,7,1,9,11]))),Bt=(0,v.lazy)(()=>m(()=>import(`./Shop-CvtROCW_.js`),__vite__mapDeps([12,3,2,7,1,11,13,14]))),Vt=(0,v.lazy)(()=>m(()=>import(`./ShopByDesign-C0TZijyc.js`),__vite__mapDeps([15,3,2,7,1,16,11]))),Ht=(0,v.lazy)(()=>m(()=>import(`./DesignDetail-BTfCNOOg.js`),__vite__mapDeps([17,3,2,7,1,16,11,18,19]))),Ut=(0,v.lazy)(()=>m(()=>import(`./DesignIndividualItems-B-wITafQ.js`),__vite__mapDeps([20,2,3,7,1,9,16,21,22,11,18,19,13]))),Wt=(0,v.lazy)(()=>m(()=>import(`./DesignCutlerySets-Ckr94bDQ.js`),__vite__mapDeps([23,2,3,7,1,9,16,11,18,19]))),Gt=(0,v.lazy)(()=>m(()=>import(`./CutlerySetProductPage-DTnLSmaF.js`),__vite__mapDeps([24,2,3,7,1,9,16,11,25,18]))),Kt=(0,v.lazy)(()=>m(()=>import(`./SpecialtySets-B49aDvRZ.js`),__vite__mapDeps([26,7,2,3,16,1,11,14]))),qt=(0,v.lazy)(()=>m(()=>import(`./SpecialtySetDetail-B3HqTKw_.js`),__vite__mapDeps([27,2,3,7,1,9,16,28,21,22,11,18]))),Jt=(0,v.lazy)(()=>m(()=>import(`./Accessories-BuzQZ0h4.js`),__vite__mapDeps([29,2,3,7,1,9,16,28,21,22,11]))),Yt=(0,v.lazy)(()=>m(()=>import(`./MakeYourOwnSet-8OSb1QTF.js`),__vite__mapDeps([30,2,3,7,16,1,11]))),Xt=(0,v.lazy)(()=>m(()=>import(`./Product-CpxFVV1h.js`),__vite__mapDeps([31,2,3,7,1,9,16,22,11,25,18]))),Zt=(0,v.lazy)(()=>m(()=>import(`./Cart-n0HlE7rl.js`),__vite__mapDeps([32,3,2,7,1,11]))),Qt=(0,v.lazy)(()=>m(()=>import(`./Checkout-CFaOMgDu.js`),__vite__mapDeps([33,2,3,7,1,34,5,4,35,16,11]))),$t=(0,v.lazy)(()=>m(()=>import(`./OrderConfirmed-BQvGlK8r.js`),__vite__mapDeps([36,3,2,7,1,11]))),en=(0,v.lazy)(()=>m(()=>import(`./OrderStatus-xYCw0xcn.js`),__vite__mapDeps([37,2,3,7,1,34,5,4,16,11]))),tn=(0,v.lazy)(()=>m(()=>import(`./Search-DpeD-8DB.js`),__vite__mapDeps([38,2,3,7,1,8,9,21,22,11]))),nn=(0,v.lazy)(()=>m(()=>import(`./OurStory-DyfCOxrL.js`),__vite__mapDeps([39,7,2,3,11]))),rn=(0,v.lazy)(()=>m(()=>import(`./Contact-CmOXngdF.js`),__vite__mapDeps([40,2,3,7,11]))),an=(0,v.lazy)(()=>m(()=>import(`./SpecialOccasionGifts-CKCC4RPH.js`),__vite__mapDeps([41,7,2,3,1,11]))),on=(0,v.lazy)(()=>m(()=>import(`./NotFound-5u81Z3-T.js`),__vite__mapDeps([18,3,2,7,1,11]))),sn=(0,v.lazy)(()=>m(()=>import(`./AdminApp-Bkn0EGY0.js`),__vite__mapDeps([42,2,3,7,1,5,4,34,35])));function cn(){return(0,y.jsx)(`div`,{className:`flex min-h-[50vh] items-center justify-center text-neutral-400`,children:(0,y.jsx)(Rt,{})})}function ln(){return(0,y.jsx)(v.Suspense,{fallback:(0,y.jsx)(cn,{}),children:(0,y.jsxs)(ae,{children:[(0,y.jsx)(g,{path:`/admin/*`,element:(0,y.jsx)(sn,{})}),(0,y.jsxs)(g,{element:(0,y.jsx)(It,{}),children:[(0,y.jsx)(g,{index:!0,element:(0,y.jsx)(zt,{})}),(0,y.jsx)(g,{path:`shop`,element:(0,y.jsx)(Bt,{})}),(0,y.jsx)(g,{path:`shop/designs`,element:(0,y.jsx)(Vt,{})}),(0,y.jsx)(g,{path:`shop/designs/:designSlug`,element:(0,y.jsx)(Ht,{})}),(0,y.jsx)(g,{path:`shop/designs/:designSlug/individual-items`,element:(0,y.jsx)(Ut,{})}),(0,y.jsx)(g,{path:`shop/designs/:designSlug/cutlery-sets`,element:(0,y.jsx)(Wt,{})}),(0,y.jsx)(g,{path:`shop/specialty-sets`,element:(0,y.jsx)(Kt,{})}),(0,y.jsx)(g,{path:`shop/specialty-sets/:type`,element:(0,y.jsx)(qt,{})}),(0,y.jsx)(g,{path:`shop/accessories`,element:(0,y.jsx)(Jt,{})}),(0,y.jsx)(g,{path:`make-your-own-set`,element:(0,y.jsx)(Yt,{})}),(0,y.jsx)(g,{path:`products/:productSlug`,element:(0,y.jsx)(Gt,{})}),(0,y.jsx)(g,{path:`product/:slug`,element:(0,y.jsx)(Xt,{})}),(0,y.jsx)(g,{path:`cart`,element:(0,y.jsx)(Zt,{})}),(0,y.jsx)(g,{path:`checkout`,element:(0,y.jsx)(Qt,{})}),(0,y.jsx)(g,{path:`order/confirmed`,element:(0,y.jsx)($t,{})}),(0,y.jsx)(g,{path:`order-status`,element:(0,y.jsx)(en,{})}),(0,y.jsx)(g,{path:`search`,element:(0,y.jsx)(tn,{})}),(0,y.jsx)(g,{path:`pages/our-story`,element:(0,y.jsx)(nn,{})}),(0,y.jsx)(g,{path:`pages/contact`,element:(0,y.jsx)(rn,{})}),(0,y.jsx)(g,{path:`pages/special-occasion-gifts`,element:(0,y.jsx)(an,{})}),(0,y.jsx)(g,{path:`*`,element:(0,y.jsx)(on,{})})]})]})})}function un(e){let t=()=>`requestIdleCallback`in window?window.requestIdleCallback(e,{timeout:3e3}):setTimeout(e,200);document.readyState===`complete`?t():window.addEventListener(`load`,t,{once:!0})}un(()=>{Re(),bt()});var dn=`/cocktail-demo/`.replace(/\/$/,``);(0,se.createRoot)(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(oe,{basename:dn,children:(0,y.jsx)(de,{children:(0,y.jsx)(ln,{})})})}));export{Ze as A,rt as C,qe as D,Ge as E,We as F,Ke as I,x as L,Je as M,ze as N,Xe as O,Ve as P,b as R,V as S,He as T,Qe as _,kt as a,tt as b,Q as c,xt as d,_t as f,ot as g,at as h,At as i,Ye as j,j as k,Z as l,it as m,Pt as n,Ot as o,H as p,Nt as r,$ as s,Lt as t,X as u,$e as v,Be as w,nt as x,et as y};