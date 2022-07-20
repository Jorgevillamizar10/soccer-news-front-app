import { memberData } from '../utils/memberData'
import { resultsData } from '../utils/resultsData'

export const Members = () => {
  return (
    <section
      id='members'
      className='w-full h-auto bg-[#333] flex flex-col items-center justify-center border-b-4 border-[#73c3ce]'
    >
      <div className='container my-12'>
        <h2 className='text-white font-bold text-3xl pl-1 mb-5'>Members</h2>
        <div className='w-full flex items-center justify-around'>
          {memberData.map((member, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center'
            >
              <div className='rounded-full w-[250px] h-[250px] border-4 border-[#73c3ce]'>
                <img
                  src={member.image}
                  alt='member-image'
                  className='w-full object-cover rounded-full h-full'
                />
              </div>
              <span className='mt-5 text-white font-bold text-3xl'>
                {member.name}
              </span>
              <span className='mt-2 text-white font-bold'>{member.cedula}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full bg-black h-14 text-white flex items-center justify-center'>
        <div className='container flex items-center justify-between'>
          <span>
            Universidad Nacional Experimental del Tachira - San Cristobal -
            Tachira - Venezuela
          </span>
          <span> Programacion II</span>
          <span> Prof Marcel Molina</span>
          <span> Martes 19 de Julio del 2022</span>
        </div>
      </div>
    </section>
  )
}
