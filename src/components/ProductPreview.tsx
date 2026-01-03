import { FlowCard } from './FlowCard';

export default function ProductPreview() {
  return (
    <div className="relative">
      <div className="bg-gray-100 rounded-lg shadow-2xl overflow-hidden">
        <div className="aspect-video bg-linear-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
          <div className="grid grid-cols-3 gap-3 w-full">
            <FlowCard color="bg-blue-500" text="Order" />
            <FlowCard color="bg-yellow-400" text="Receive order" dark />
            <FlowCard color="bg-pink-400" text="Extra" />
            <FlowCard color="bg-orange-400" text="Check stock" />
            <FlowCard color="bg-purple-600" text="Multi" />
            <FlowCard color="bg-yellow-400" text="Cancel order" dark />
            <FlowCard color="bg-purple-400" text="Stage 1" />
            <FlowCard color="bg-gray-900" text="Logic" />
            <FlowCard color="bg-blue-600" text="Notify" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-200 rounded-lg aspect-video"></div>
        <div className="bg-gray-200 rounded-lg aspect-video"></div>
        <div className="bg-gray-200 rounded-lg aspect-video"></div>
      </div>
    </div>
  );
}