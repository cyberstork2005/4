import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import ReservationModal from './ReservationModal';
import ImageModal from './ImageModal';
import './Home.css';

function Home() {
  const [designs, setDesigns] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // ローカルストレージからデザインを読み込む
    let storedDesigns = JSON.parse(localStorage.getItem('designs') || '[]');
    
    // デザインがない場合、サンプルデータを追加
    if (storedDesigns.length === 0) {
      storedDesigns = [
        {
          id: 1,
          designNumber: 'D001',
          price: 5000,
          buyers: 8,
          image: 'https://placehold.co/300x200?text=GRヤリスメーター',
          carModel: 'gryaris-gxpa16',
          startDate: new Date().toISOString(),
          isApproved: true
        },
        {
          id: 2,
          designNumber: 'D002',
          price: 4500,
          buyers: 12,
          image: 'https://placehold.co/300x200?text=ジムニーメーター',
          carModel: 'jimny',
          startDate: new Date().toISOString(),
          isApproved: true
        },
        // 他のサンプルデザインを追加...
      ];
      localStorage.setItem('designs', JSON.stringify(storedDesigns));
    }
    
    setDesigns(storedDesigns);
  }, []);

  // 残りのコードは変更なし
  ...
}

export default Home;