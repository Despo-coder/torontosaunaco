export const ToggleSwitch = ({ options, selected, onSelect }) => (
    <div className="inline-flex rounded-lg bg-gray-100 p-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`px-6 py-2 rounded-md transition-colors ${
            selected === option.value 
              ? 'bg-white shadow-sm text-blue-600' 
              : 'text-gray-500 hover:text-blue-500'
          }`}
        >
          {option.label} 
        </button>
      ))}
    </div>
  );