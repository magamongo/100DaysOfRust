extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn is_prime(n: u64){
    let judgement = (2..(n as f64).sqrt() as u64 + 1).all(|i| n % i != 0);
    if judgement { 
        alert("This is a prime number! :)"); 
    } else { 
        alert("This is not a prime number."); 
    }
}