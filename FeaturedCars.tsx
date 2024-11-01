import Link from 'next/link';

const cars = [
  { slug: 'toyota-corolla', name: 'Toyota Corolla' },
  { slug: 'honda-civic', name: 'Honda Civic' },
];

const FeaturedCars = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold">Featured Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cars.map(car => (
          <div key={car.slug} className="border rounded p-4">
            <h3 className="text-xl">{car.name}</h3>
            <Link href={`/${car.slug}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;
