"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../../styles/Header.css"; // اثنين ../../ للرجوع من components إلى src/styles


export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link href="/" className="header-logo">
          <Image src="/Zaria.svg" alt="Zaria Shop Logo" width={50} height={50} />
          <h1>ZARIA COSMETICS</h1>
        </Link>
      </div>

      <nav className="header-nav">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="header-search">
        <input type="text" placeholder="Search beauty products..." />
        <button>Search</button>
      </div>

      <div className="header-actions">
        <Link href="/cart" className="btn-cart">🛒</Link>
        <Link href="/login">Login</Link>
        <Link href="/register" className="btn-register">Sign Up</Link>
      </div>
    </header>
  );
}

// last update 21/oct/2025 16:24