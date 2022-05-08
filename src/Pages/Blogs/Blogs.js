import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blog'>
                <div>
                    <h2>Javascript এবং node.js এর মধ্যে পার্থক্য কি ?</h2>
                </div>
                <div>
                    <p>Javascript হল একটা সিংগেল থ্রেতেড প্রোগ্রামিং ল্যাঙ্গুয়েজ যেটা ব্রাউজার এ চলে । node.js হল একটা interpreter অথবা running environment Javascript এর জন্য । Javascript সাধারণত client side এ ব্যাবহার করা হয় । node.js সাধারণত server side এ ব্যাবহার করা হয় । Javascript ফ্রন্টএন্ড এর কাজ করার জন্য ব্যাবহার করা হয় । node.js ব্যাকএন্ড এর কাজ এর জন্য ব্যাবহার করা হয় । </p>
                </div>
            </div>
            <div className='blog'>
                <div>
                    <h2>আমরা কখন node.js এবং mongodb ব্যাবহার করব ?</h2>
                </div>
                <div>
                    <p>node.js দিয়ে আমরা server এর কাজ টা করি । আমাদের যখন কোন  server releted কোন কাজ দরকার হবে তখন আমরা node.js ব্যাবহার করব ।  mongodb দিয়ে আমরা ডাটা জমা রাখার কাজ করি । আমাদের যখন ডাটা কোথাও জমা রাখতে হবে তখন আমরা mongodb ব্যাবহার করব । </p>
                </div>
            </div>
            <div className='blog'>
                <div>
                    <h2>JWT এর কাজ কি?</h2>
                </div>
                <div>
                    <p>এর কাজ হল একটা api কে protected করা ।  </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;