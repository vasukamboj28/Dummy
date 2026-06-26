import { useEffect } from 'react';
interface SEOProps { title:string; description:string; canonical?:string; }
export default function SEO({title,description,canonical}:SEOProps){
useEffect(()=>{
document.title=title;
const setMeta=(attr:string,key:string,val:string)=>{
 let el=document.querySelector(`meta[${attr}="${key}"]`);
 if(!el){el=document.createElement('meta');el.setAttribute(attr,key);document.head.appendChild(el);}
 el.setAttribute('content',val);
};
setMeta('name','description',description);
setMeta('property','og:title',title);
setMeta('property','og:description',description);
setMeta('property','og:type','website');
setMeta('property','og:image','https://drinkyard2.netlify.app/og-image.svg');
setMeta('name','twitter:card','summary_large_image');
setMeta('name','twitter:title',title);
setMeta('name','twitter:description',description);
setMeta('name','twitter:image','https://drinkyard2.netlify.app/og-image.svg');
 let link=document.querySelector('link[rel="canonical"]');
 if(!link){link=document.createElement('link');link.setAttribute('rel','canonical');document.head.appendChild(link);}
 link.setAttribute('href',canonical||window.location.href);
},[title,description,canonical]);
return null;}