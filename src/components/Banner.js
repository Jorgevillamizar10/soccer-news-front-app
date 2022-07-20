export const Banner = () => {
  return (
    <div className='w-full h-[600px] bg-home-banner bg-no-repeat bg-cover p-10 flex items-center justify-center '>
      <div className='container w-full h-full flex flex-col items-start justify-end'>
        <h1 className='text-white text-[42px] font-bold'>{`Lewandowski: "Es la decisión más importante de mi vida"`}</h1>
        <p className='text-white text-xl'>
          {`Entre Robert Lewandowksi y el Barça solo falta la confirmación oficial. El delantero ha concedido una última entrevista al medio alemán 'Bild' antes de marchar a la gira por Estados Unidos de su nuevo equipo. Para el pichichi de la Bundesliga, fichar por el FC Barcelona es "la decisión más importante" de su vida. También ha destacado que espera "ganar muchos títulos" con los blaugranas.`}
        </p>
      </div>
    </div>
  )
}
