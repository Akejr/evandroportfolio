import React, { useState } from 'react';
import { X, RotateCcw, Copy, Check } from 'lucide-react';

interface PhotoPositionTesterProps {
  isVisible: boolean;
  onClose: () => void;
}

const PhotoPositionTester: React.FC<PhotoPositionTesterProps> = ({ isVisible, onClose }) => {
  const [scale, setScale] = useState(1.0);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [marginTop, setMarginTop] = useState(0);
  const [objectFit, setObjectFit] = useState<'cover' | 'contain'>('contain');
  const [copied, setCopied] = useState(false);

  const resetValues = () => {
    setScale(1.0);
    setPositionX(0);
    setPositionY(0);
    setMarginTop(0);
    setObjectFit('contain');
  };

  const generateCSS = () => {
    return `objectFit: '${objectFit}',
transform: 'scale(${scale}) translate(${positionX}%, ${positionY}%)',
marginTop: '${marginTop}px'`;
  };

  const copyCSS = () => {
    navigator.clipboard.writeText(generateCSS());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: objectFit,
    transform: `scale(${scale}) translate(${positionX}%, ${positionY}%)`,
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Ajustar Posição da Foto</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Preview</h3>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h4 className="text-sm text-gray-400 mb-4">Hero Section</h4>
              <div 
                className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#0bbbd0] mx-auto relative shadow-2xl shadow-cyan-500/25 bg-zinc-950"
                style={{ marginTop: `${marginTop}px` }}
              >
                <img 
                  src="/images/foto nova perfil.png" 
                  alt="Evandro Casanova" 
                  style={imgStyle}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: '#0bbbd0', opacity: 0.35, mixBlendMode: 'soft-light' } as React.CSSProperties}
                ></div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Controles</h3>
              <button onClick={resetValues} className="flex items-center gap-2 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded-lg text-sm transition-colors">
                <RotateCcw size={16} /> Reset
              </button>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Modo de Ajuste:</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setObjectFit('contain')}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm transition-all ${objectFit === 'contain' ? 'bg-[#0bbbd0] text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                >
                  Contain (foto inteira)
                </button>
                <button
                  onClick={() => setObjectFit('cover')}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm transition-all ${objectFit === 'cover' ? 'bg-[#0bbbd0] text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                >
                  Cover (preencher)
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Zoom: {scale.toFixed(2)}x</label>
              <input type="range" min="0.5" max="3" step="0.05" value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Posição Horizontal: {positionX}%</label>
              <input type="range" min="-50" max="50" step="1" value={positionX}
                onChange={(e) => setPositionX(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Posição Vertical: {positionY}%</label>
              <input type="range" min="-50" max="50" step="1" value={positionY}
                onChange={(e) => setPositionY(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Margem Superior: {marginTop}px</label>
              <input type="range" min="-50" max="100" step="5" value={marginTop}
                onChange={(e) => setMarginTop(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">CSS Gerado:</label>
              <div className="bg-zinc-900 p-4 rounded-lg relative">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">{generateCSS()}</pre>
                <button onClick={copyCSS} className="absolute top-2 right-2 p-2 bg-[#0bbbd0] hover:bg-cyan-600 rounded-lg transition-colors" title="Copiar CSS">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-300 mb-2">Dica:</h4>
              <p className="text-sm text-blue-200">Use "Contain" para ver a foto inteira, depois aumente o zoom e ajuste a posição para enquadrar como quiser.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPositionTester;