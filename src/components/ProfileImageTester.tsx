import React, { useState, useEffect } from 'react';
import { Settings, X, RotateCcw } from 'lucide-react';

interface ProfileImageTesterProps {
  isVisible: boolean;
  onClose: () => void;
}

const ProfileImageTester: React.FC<ProfileImageTesterProps> = ({ isVisible, onClose }) => {
  const [scale, setScale] = useState(2.5);
  const [positionX, setPositionX] = useState(50);
  const [positionY, setPositionY] = useState(45);
  const [selectedImage, setSelectedImage] = useState('/images/Profile.JPEG');

  const availableImages = [
    { name: 'Profile.JPEG', path: '/images/Profile.JPEG' },
    { name: 'wad.JPEG', path: '/images/wad.JPEG' }
  ];

  const resetValues = () => {
    setScale(2.5);
    setPositionX(50);
    setPositionY(45);
    setSelectedImage('/images/Profile.JPEG');
  };

  const copyCSS = () => {
    const css = `transform: 'scale(${scale})',
objectPosition: '${positionX}% ${positionY}%'`;
    navigator.clipboard.writeText(css);
    alert('CSS copiado para a área de transferência!');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Settings className="mr-2" size={24} />
            Ajustar Foto de Perfil
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Preview</h3>
            
            {/* Hero Size Preview */}
            <div>
              <p className="text-sm text-gray-400 mb-2">Tamanho Hero (160x160px)</p>
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#0bbbd0] mx-auto relative shadow-2xl shadow-cyan-500/25">
                <img 
                  src={selectedImage}
                  alt="Preview Hero" 
                  className="w-full h-full object-cover"
                  style={{
                    transform: `scale(${scale})`,
                    objectPosition: `${positionX}% ${positionY}%`
                  }}
                />
              </div>
            </div>

            {/* About Size Preview */}
            <div>
              <p className="text-sm text-gray-400 mb-2">Tamanho About (256x256px)</p>
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#0bbbd0] mx-auto relative shadow-2xl shadow-cyan-500/25">
                <img 
                  src={selectedImage}
                  alt="Preview About" 
                  className="w-full h-full object-cover"
                  style={{
                    transform: `scale(${scale})`,
                    objectPosition: `${positionX}% ${positionY}%`
                  }}
                />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Controles</h3>

            {/* Image Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Selecionar Imagem
              </label>
              <select
                value={selectedImage}
                onChange={(e) => setSelectedImage(e.target.value)}
                className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-3 py-2 text-white"
              >
                {availableImages.map((img) => (
                  <option key={img.path} value={img.path}>
                    {img.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Scale Control */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Zoom: {scale.toFixed(1)}x
              </label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.1"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Position X Control */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Posição Horizontal: {positionX}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={positionX}
                onChange={(e) => setPositionX(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Position Y Control */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Posição Vertical: {positionY}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={positionY}
                onChange={(e) => setPositionY(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* CSS Output */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                CSS Gerado
              </label>
              <div className="bg-zinc-900 border border-zinc-600 rounded-lg p-3 text-sm font-mono text-green-400">
                <div>transform: 'scale({scale})',</div>
                <div>objectPosition: '{positionX}% {positionY}%'</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={resetValues}
                className="flex items-center px-4 py-2 bg-zinc-600 hover:bg-zinc-500 text-white rounded-lg transition-colors"
              >
                <RotateCcw size={16} className="mr-2" />
                Reset
              </button>
              <button
                onClick={copyCSS}
                className="flex-1 px-4 py-2 bg-[#0bbbd0] hover:bg-cyan-600 text-white rounded-lg transition-colors"
              >
                Copiar CSS
              </button>
            </div>

            {/* Instructions */}
            <div className="bg-zinc-900 border border-zinc-600 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-white mb-2">Como usar:</h4>
              <ol className="text-xs text-gray-400 space-y-1">
                <li>1. Ajuste os controles até ficar satisfeito</li>
                <li>2. Clique em "Copiar CSS" para copiar os valores</li>
                <li>3. Use os valores copiados no código</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #0bbbd0;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #0bbbd0;
          cursor: pointer;
          border: none;
        }
        `}
      </style>
    </div>
  );
};

export default ProfileImageTester; 