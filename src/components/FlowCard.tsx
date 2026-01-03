export function FlowCard({ color, text, dark = false }: { color: string; text: string; dark?: boolean }) {
  return (
    <div className={`${color} ${dark ? 'text-gray-900' : 'text-white'} p-3 rounded-lg shadow-lg text-xs font-medium text-center`}>
      {text}
    </div>
  );
}