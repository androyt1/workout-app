import React,{useEffect,useState} from 'react'
import { exerciseOptions,fetchExercises } from '../util/axiosClient' 

const Home = () => {
    const [exercises,setExercises] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [search,setSearch] = useState('');
    const [searchResults,setSearchResults] = useState([]);
   

    useEffect(()=>{
        fetchExercises('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
        .then(data=>{
            setExercises(data);          
            setLoading(false);
            let items=data.filter(exercise=>exercise.bodyPart.toLowerCase().includes('back')).slice(0,8);
            setSearchResults(items);
        })
        .catch(err=>{
            setError(err);
            setLoading(false);
        }) 
    },[])

   

    //get search results from api
    const getSelectedExercise = search => {
        const result=exercises.filter(exercise=>exercise.bodyPart.toLowerCase().includes(search.toLowerCase())).slice(0,8);
        setSearchResults(result);
    }


  return (
    <div className='relative'>
        <div className='w-full flex justify-center items-center'>
            <span className='font-gent uppercase text-2xl py-3'>Choose Body Part</span>
        </div>
        <div className='whitespace-nowrap overflow-x-auto py-4 w-full md:max-w-[1000px] mx-auto bg-white px-3'>
            <button onClick={()=>getSelectedExercise('back')} className='bg-slate-300 text-slate-900 font-gent text-sm mx-6 px-6 py-1 shadow-md shadow-black'>Back</button>
            <button onClick={()=>getSelectedExercise('cardio')} className='bg-slate-300 text-slate-900 font-gent text-sm mx-6 px-6 py-1 shadow-md shadow-black'>Cardio</button>
            <button onClick={()=>getSelectedExercise('chest')} className='bg-slate-300 text-slate-900 font-gent text-sm mx-6 px-6 py-1 shadow-md shadow-black'>Chest</button>
            <button onClick={()=>getSelectedExercise('lower arms')} className='bg-slate-300 text-slate-900 font-gent text-sm mx-6 px-6 py-1 shadow-md shadow-black'>Lower Arms</button>
            <button  onClick={()=>getSelectedExercise('lower legs')} className='bg-slate-300 text-slate-900 font-gent text-sm mx-6 px-6 py-1 shadow-md shadow-black'>lower legs</button>
            <button onClick={()=>getSelectedExercise('neck')} className='bg-slate-300 text-slate-900 font-gent text-sm mx-6 px-6 py-1 shadow-md shadow-black'>neck</button>
            <button  onClick={()=>getSelectedExercise('shoulders')} className='bg-slate-300 text-slate-900 font-gent text-sm mx-6 px-6 py-1 shadow-md shadow-black'>shoulders</button>
            <button  onClick={()=>getSelectedExercise('upper arms')} className='bg-slate-300 text-slate-900 font-gent text-sm mx-6 px-6 py-1 shadow-md shadow-black'>upper arms</button>
            <button  onClick={()=>getSelectedExercise('upper legs')} className='bg-slate-300 text-slate-900 font-gent text-sm mx-6 px-6 py-1 shadow-md shadow-black'>upper legs</button>
            <button  onClick={()=>getSelectedExercise('waist')} className='bg-slate-300 text-slate-900 font-gent text-sm mx-6 px-6 py-1 shadow-md shadow-black'>waist</button>
        </div>

        <section className='w-full py-5 px-3 bg-slate-100'>
            <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-4 place-items-center min-h-[60vh] '>
            {
                searchResults ?. map(exercise=>(
                <div key={exercise.id} className='w-full font-gent bg-white'>
                   <div className='w-full px-3 font-bold uppercase text-md'> <span >Name</span> <span className='font-normal'>{exercise.name}</span></div>
                   <div className='px-3 font-gent'><span className='font-bold'>Body Part</span> <span>{exercise.bodyPart}</span></div>
                   <div className='px-3 font-gent'><span className='font-bold'>Equipment</span> <span>{exercise.equipment}</span></div>
                   <div className='px-3 font-gent'><span className='font-bold'>Target</span> <span>{exercise.target}</span></div>
                   <div className='w-full flex justify-center items-center'>
                    <img src={exercise.gifUrl} alt={exercise.name} className='h-[40vh]  object-cover' /> 
                   </div>
                </div>
                ))
            }
            </div>
        </section>
    </div>
  )
}

export default Home