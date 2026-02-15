import { medicines } from '@/data/medicines';
import ProductCard from '@/components/pharmacy/ProductCard';

export const metadata = {
  title: 'Pharmacy - MediCare',
  description: 'Buy medicines online with MediCare Pharmacy.',
};

export default function PharmacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            MediCare Pharmacy
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Get your medicines delivered to your doorstep. Genuine products, fast delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {medicines.map((medicine) => (
            <ProductCard key={medicine.id} product={medicine} />
          ))}
        </div>
      </div>
    </div>
  );
}
