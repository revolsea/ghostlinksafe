# 🕸️ GhostLinkSafe

> **Decentralized link-based crypto transfer protocol — send funds without wallet addresses.**

---

## 🌐 Overview

**GhostLinkSafe** is a decentralized Web3 protocol that allows users to send or claim crypto assets **via unique, encrypted links** instead of traditional wallet addresses.

Funds are held in **non-custodial smart contracts** until claimed. Each transfer link includes **expiry time, cryptographic proof, and optional notes**, ensuring a secure and frictionless experience.

---

## ✨ Core Features

| Feature | Description |
|----------|-------------|
| 🔗 **Link-based transfers** | Send crypto securely via unique claim links |
| 🔒 **Non-custodial vaults** | Funds are never held by the platform |
| ⏱️ **Time-locked claims** | Expiration prevents lost or inactive links |
| 🧾 **Auditable smart contracts** | Transparent, open-source Solidity code |
| ⚡ **Instant preview mode** | Works on Base and Linea testnets |
| 🧩 **Extensible modules** | Future: anonymous proofs, multi-token vaults |

---

## 🧠 Architecture

```
User → GhostLink UI → Smart Contract (Vault)
          ↕
     Link Generator
          ↕
     Claim Verifier
```

- **Frontend:** React + Vite (Glossy UI)
- **Smart Contracts:** Solidity (Hardhat)
- **Supported Networks:** Base, Linea (testnets)
- **Design Language:** Dark bronze & electric aesthetic

---

## 🚀 Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
# visit http://localhost:5173
```

### Smart Contracts
```bash
cd contracts
npm install
npx hardhat compile
npx hardhat test
```

### Deploy (example)
```bash
npx hardhat run scripts/deploy.js --network baseSepolia
```

---

## 🧱 Folder Structure

```
ghostlinksafe/
├── frontend/      # React + Vite glossy interface
├── contracts/     # Solidity smart contracts
├── docs/          # Whitepaper and notes
├── assets/        # Logos and visuals
├── README.md      # This file
└── LICENSE        # MIT license
```

---

## 🌈 Design Philosophy

- **Speed first** — Blockchain never sleeps, neither should the UI.  
- **Transparency** — Every step auditable and privacy-respecting.  
- **Simplicity** — For both advanced and new users.  
- **Elegance** — Glossy, dark bronze, minimal.

> “Security, anonymity, and beauty — all in one protocol.”

---

## 🧩 Roadmap

- [x] UI + Claim/Create mock flow  
- [x] Smart contract vault demo  
- [ ] zk-proof integration  
- [ ] Layer-2 optimization (Base & Linea mainnets)  
- [ ] DAO governance for link rules  
- [ ] Multi-token and NFT support  

---

## 🤝 Contributing

Pull requests are welcome.  
For large changes, please open an issue to discuss your idea first.

---

## ⚖️ License

Licensed under the **MIT License**.  
You are free to use, modify, and distribute with attribution.

---

## 🌍 Connect

- GitHub: [revolsea](https://github.com/revolsea)
- Live Preview: Coming soon (Vercel)

---

# 🇹🇷 Türkçe

> **Cüzdan adresi bilmeden kripto gönderimi sağlayan bağlantı tabanlı merkeziyetsiz protokol.**

---

## 🌐 Genel Bakış

**GhostLinkSafe**, kullanıcıların kripto varlıklarını **cüzdan adresi bilmeden, benzersiz bağlantılar** aracılığıyla göndermesine veya talep etmesine imkân tanıyan bir Web3 protokolüdür.

Fonlar, **emanetsiz (non-custodial)** akıllı sözleşmelerde tutulur ve her bağlantı **süre kilidi, şifreleme ve opsiyonel mesaj** içerir. Böylece güvenli, şeffaf ve pürüzsüz bir deneyim sunulur.

---

## ✨ Temel Özellikler

| Özellik | Açıklama |
|----------|-----------|
| 🔗 **Bağlantı tabanlı transfer** | Benzersiz bağlantılarla güvenli kripto gönderimi |
| 🔒 **Emanetsiz kasa** | Fonlar platformda tutulmaz |
| ⏱️ **Süre kilidi** | Süresi dolan bağlantılar geçersiz olur |
| 🧾 **Denetlenebilir sözleşme** | Açık kaynak Solidity kodu |
| ⚡ **Anında önizleme modu** | Base ve Linea testnet desteği |
| 🧩 **Modüler yapı** | Gelecekte: anonim doğrulama, çoklu token kasası |

---

## 🧠 Mimarî

```
Kullanıcı → GhostLink Arayüzü → Akıllı Sözleşme (Kasa)
                ↕
           Bağlantı Üretici
                ↕
           Claim Doğrulayıcı
```

- **Arayüz:** React + Vite (glossy UI)
- **Sözleşmeler:** Solidity (Hardhat)
- **Ağlar:** Base ve Linea testnet
- **Tasarım:** Koyu bronz ve elektrikli parıltı teması

---

## 🚀 Hızlı Başlangıç

### Ön Uç (Frontend)
```bash
cd frontend
npm install
npm run dev
# http://localhost:5173
```

### Akıllı Sözleşme
```bash
cd contracts
npm install
npx hardhat compile
npx hardhat test
```

### Dağıtım (örnek)
```bash
npx hardhat run scripts/deploy.js --network baseSepolia
```

---

## 🧱 Klasör Yapısı

```
ghostlinksafe/
├── frontend/     # React + Vite arayüzü
├── contracts/    # Solidity akıllı sözleşmeleri
├── docs/         # Teknik dökümanlar ve whitepaper
├── assets/       # Logolar ve görseller
├── README.md     # Bu dosya
└── LICENSE       # MIT lisansı
```

---

## 🌈 Tasarım Felsefesi

- **Hız öncelikli:** Blockchain uyumaz, arayüz de uyumamalı.  
- **Şeffaflık:** Tüm işlemler izlenebilir ama gizliliğe saygılı.  
- **Basitlik:** Kriptoya yeni kullanıcılar için bile anlaşılır.  
- **Zarafet:** Glossy tasarım diliyle şekillenmiştir.

> “Güvenlik, anonimli̇k ve esteti̇k — tek protokolde.”

---

## 🧩 Yol Haritası

- [x] UI ve temel etkileşim  
- [x] Kasa prototipi  
- [ ] zk-proof entegrasyonu  
- [ ] Layer-2 ana ağ dağıtımı  
- [ ] DAO tabanlı yönetim  
- [ ] NFT ve çoklu token desteği  

---

## 🤝 Katkı

Pull request’ler memnuniyetle kabul edilir.  
Büyük değişikliklerden önce lütfen bir issue açın.

---

## ⚖️ Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır.  
Kullanabilir, değiştirebilir ve referans vererek dağıtabilirsiniz.

---

## 🌍 İletişim

- GitHub: [revolsea](https://github.com/revolsea)
- Canlı Önizleme: Vercel üzerinde (yakında)
