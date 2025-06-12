const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Sarah Johnson',
    role: 'Program Manager',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'David Kim',
    role: 'Technology Lead',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Priya Sharma',
    role: 'Community Outreach',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'James Wilson',
    role: 'Partnership Coordinator',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export default function AboutComponent() {
  return (
    <>
    <div className="mt-20">
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </>
  )
}
