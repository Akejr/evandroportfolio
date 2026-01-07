import React, { useState } from 'react';
import { X, RotateCcw, Copy, Check } from 'lucide-react';

interface PhotoPositionTesterProps {
  isVisible: boolean;
  onClose: () => void;
}

const PhotoPositionTester: React.FC<PhotoPositionTesterProps> = ({ isVisible, onClose }) => {
  const [scale, setScale] = useState(1.3);
  const [positionX, setPositionX] = useState(50);
  const [positionY, setPositionY] = useState(50);
  const [marginTop, setMarginTop] = useState(0);
  const [copied, setCopied] = useState(false);

  const resetValues = () => {
    setScale(1.3);
    setPositionX(50);
    setPositionY(50);
    setMarginTop(0);
  };

  const generateCSS = () => {
    return `transform: 'scale(${scale})',
objectPosition: '${positionX}% ${positionY}%',
marginTop: '${marginTop}px'`;
  };

  const copyCSS = () => {
    navigator.clipboard.writeText(generateCSS());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Ajustar Posição da Foto</h2>
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
            
            {/* Hero Preview */}
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h4 className="text-sm text-gray-400 mb-4">Hero Section</h4>
              <div 
                className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#0bbbd0] mx-auto relative shadow-2xl shadow-cyan-500/25"
                style={{ marginTop: `${marginTop}px` }}
              >
                <img 
                  src="/images/foto nova perfil.png" 
                  alt="Evandro Casanova" 
                  className="w-full h-full object-cover"
                  style={{
                    transform: `scale(${scale})`,
                    objectPosition: `${positionX}% ${positionY}%`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* About Preview */}
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h4 className="text-sm text-gray-400 mb-4">About Section</h4>
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#0bbbd0] mx-auto relative shadow-2xl shadow-cyan-500/25">
                <img 
                  src="/images/foto nova perfil.jpg" 
                  alt="Evandro Casanova" 
                  className="w-full h-full object-cover"
                  style={{
                    transform: `scale(${scale})`,
                    objectPosition: `${positionX}% ${positionY}%`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Controles</h3>
              <button
                onClick={resetValues}
                className="flex items-center gap-2 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded-lg text-sm transition-colors"
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>

            {/* Scale Control */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Zoom: {scale.toFixed(2)}x
              </label>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Position X Control */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Posição Horizontal: {positionX}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={positionX}
                onChange={(e) => setPositionX(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Position Y Control */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Posição Vertical: {positionY}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={positionY}
                onChange={(e) => setPositionY(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Margin Top Control */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Margem Superior (Hero): {marginTop}px
              </label>
              <input
                type="range"
                min="-50"
                max="100"
                step="5"
                value={marginTop}
                onChange={(e) => setMarginTop(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* CSS Output */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                CSS Gerado:
              </label>
              <div className="bg-zinc-900 p-4 rounded-lg relative">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                  {generateCSS()}
                </pre>
                <button
                  onClick={copyCSS}
                  className="absolute top-2 right-2 p-2 bg-[#0bbbd0] hover:bg-cyan-600 rounded-lg transition-colors"
                  title="Copiar CSS"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-300 mb-2">Instruções:</h4>
              <ol className="text-sm text-blue-200 space-y-1">
                <li>1. Ajuste os controles até ficar satisfeito</li>
                <li>2. Copie o CSS gerado</li>
                <li>3. Me envie os valores para aplicar no código</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPositionTester;