import Image from 'next/image';
import Head from 'next/head';

const ProjectCard = ({ imageSrc, title, subtitle, desc }: { imageSrc: string, title: string, subtitle: string, desc: string }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 mx-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="relative h-40 w-full">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">{subtitle}</p>
        <p className="text-gray-800">{desc}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const projects = [
    {
      title: "Project 1",
      subtitle: "Subtitle 1",
      desc: "Description 1",
      imageSrc: "/path/to/image1.jpg",
    },
    {
      title: "Project 2",
      subtitle: "Subtitle 2",
      desc: "Description 2",
      imageSrc: "/path/to/image2.jpg",
    },
    {
      title: "Project 3",
      subtitle: "Subtitle 3",
      desc: "Description 3",
      imageSrc: "/path/to/image3.jpg",
    },
    {
      title: "Project 4",
      subtitle: "Subtitle 4",
      desc: "Description 4",
      imageSrc: "/path/to/image4.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <Head>
        <title>Daniel Sun's Engineering Portfolio</title>
        {/* Add your meta tags, stylesheets, etc. here */}
      </Head>

      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Daniel Sun's Engineering Portfolio</h1>

        <div className="flex flex-wrap">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}
