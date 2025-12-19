import React, { useState } from 'react';
import { X, RotateCcw, Copy, Check, Palette } from 'lucide-react';

interface PhotoFilterTesterProps {
  isVisible: boolean;
  onClose: () => void;
}

const PhotoFilterTester: React.FC<PhotoFilterTesterProps> = ({ isVisible, onClose }) => {
  const [selectedFilter, setSelectedFilter] = useState('none');
  const [customColor, setCustomColor] = useState('#0bbbd0');
  const [opacity, setOpacity] = useState(0.3);
  const [blendMode, setBlendMode] = useState('multiply');
  const [copied, setCopied] = useState(false);

  const presetFilters = [
    { name: 'Nenhum', value: 'none', color: 'transparent' },
    { name: 'Azul Ciano', value: 'cyan', color: '#0bbbd0' },
    { name: 'Azul Escuro', value: 'blue', color: '#1e40af' },
    { name: 'Roxo', value: 'purple', color: '#7c3aed' },
    { name: 'Rosa', value: 'pink', color: '#ec4899' },
    { name: 'Verde', value: 'green', color: '#059669' },
    { name: 'Laranja', value: 'orange', color: '#ea580c' },
    { name: 'Vermelho', value: 'red', color: '#dc2626' },
    { name: 'Amarelo', value: 'yellow', color: '#d97706' },
    { name: 'Preto', value: 'black', color: '#000000' },
    { name: 'Branco', value: 'white', color: '#ffffff' },
    { name: 'Personalizado', value: 'custom', color: customColor }
  ];

  const blendModes = [
    { name: 'Multiply', value: 'multiply' },
    { name: 'Overlay', value: 'overlay' },
    { name: 'Soft Light', value: 'soft-light' },
    { name: 'Hard Light', value: 'hard-light' },
    { name: 'Color Dodge', value: 'color-dodge' },
    { name: 'Color Burn', value: 'color-burn' },
    { name: 'Darken', value: 'darken' },
    { name: 'Lighten', value: 'lighten' },
    { name: 'Screen', value: 'screen' },
    { name: 'Normal', value: 'normal' }
  ];

  const resetValues = () => {
    setSelectedFilter('none');
    setCustomColor('#0bbbd0');
    setOpacity(0.3);
    setBlendMode('multiply');
  };

  const getFilterColor = () => {
    if (selectedFilter === 'none') return 'transparent';
    if (selectedFilter === 'custom') return customColor;
    const filter = presetFilters.find(f => f.value === selectedFilter);
    return filter ? filter.color : 'transparent';
  };

  const generateCSS = () => {
    if (selectedFilter === 'none') {
      return `/* Sem filtro */
background: transparent;`;
    }
    
    return `background: ${getFilterColor()};
opacity: ${opacity};
mix-blend-mode: ${blendMode};`;
  };

  const copyCSS = () => {
    navigator.clipboard.writeText(generateCSS());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFilterStyle = () => {
    if (selectedFilter === 'none') return {};
    
    return {
      background: getFilterColor(),
      opacity: opacity,
      mixBlendMode: blendMode as any
    };
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-800 rounded-xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Palette size={24} className="text-[#0bbbd0]" />
            <h2 className="text-2xl font-bold text-white">Testador de Filtros</h2>
          </div>
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
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#0bbbd0] mx-auto relative shadow-2xl shadow-cyan-500/25">
                <img 
                  src="/images/foto nova perfil.jpg" 
                  alt="Evandro Casanova" 
                  className="w-full h-full object-cover"
                  style={{
                    transform: 'scale(1)',
                    objectPosition: '54% 34%',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
                {selectedFilter !== 'none' && (
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={getFilterStyle()}
                  ></div>
                )}
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
                    transform: 'scale(1)',
                    objectPosition: '54% 34%',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
                {selectedFilter !== 'none' && (
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={getFilterStyle()}
                  ></div>
                )}
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

            {/* Preset Filters */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-300">
                Filtros Predefinidos:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {presetFilters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedFilter(filter.value)}
                    className={`p-3 rounded-lg border-2 transition-all text-sm ${
                      selectedFilter === filter.value
                        ? 'border-[#0bbbd0] bg-[#0bbbd0]/20'
                        : 'border-gray-600 bg-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <div 
                      className="w-full h-6 rounded mb-2"
                      style={{ backgroundColor: filter.color }}
                    ></div>
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Color */}
            {selectedFilter === 'custom' && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Cor Personalizada:
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    className="w-12 h-10 rounded border border-gray-600 bg-transparent cursor-pointer"
                  />
                  <input
                    type="text"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                    placeholder="#0bbbd0"
                  />
                </div>
              </div>
            )}

            {/* Opacity Control */}
            {selectedFilter !== 'none' && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Opacidade: {Math.round(opacity * 100)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={opacity}
                  onChange={(e) => setOpacity(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            )}

            {/* Blend Mode */}
            {selectedFilter !== 'none' && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Modo de Mistura:
                </label>
                <select
                  value={blendMode}
                  onChange={(e) => setBlendMode(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                >
                  {blendModes.map((mode) => (
                    <option key={mode.value} value={mode.value}>
                      {mode.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

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
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-purple-300 mb-2">Instruções:</h4>
              <ol className="text-sm text-purple-200 space-y-1">
                <li>1. Escolha um filtro predefinido ou use cor personalizada</li>
                <li>2. Ajuste a opacidade e modo de mistura</li>
                <li>3. Copie o CSS gerado quando estiver satisfeito</li>
                <li>4. Me envie o CSS para aplicar no código</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoFilterTester;