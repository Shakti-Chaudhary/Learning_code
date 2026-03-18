import { useState } from "react";
import "./App.css";
import {z} from 'zod';

// const userFormSchema = z.object({
//   firstName: z.string().min(3,{message:"firstname should be atleast 3 characters long"}).max(15,{message:"firstname should be less than 15 characters long"}),
//   lastName: z.string().min(3,{message:"lastname should be atleast 3 characters long"}).max(15,{message:"lastname should be less than 15 characters long'})
//  email: z.string().email(),
//  profileUrl: z.string().url(),
//  age: z.number().min(1),
// friends: z.array(z.string()).max(3)
// setting : z.object({
// isSubscribed: z.boolean()
// })
// })

// type UserForm = z.infer<typeof userFormSchema>;

// const form = useForm<UserForm>({resolver: zodResolver(userFormSchema)});


function App() {

  const userFormSchema = z.object({
    username: z.string().min(3,{message:"username should be atleast 3 characters long"}).max(15,{message:"username should be less than 15 characters long"}),
    email: z.string().email({message: 'Invalid email'}),
  })

  const [error,setError] = useState<Record<string,string>>({})

  const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
   
    // const formData = new FormData(event.target as HTMLFormElement)
    const formData = new FormData(event.currentTarget)

    const username = formData.get('username')
    const email = formData.get('email')
    const user = {
      username,
      email
    }
    const errors = userFormSchema.safeParse(user) // generate error with name and messages 
    if (!errors.success) {
      const fieldErrors: Record<string, string> = {};
      
      // console.log('Errors -> ', errors.error?.flatten().fieldErrors) // fiedErrors have errors in object and value message in array than in string 
      const flattenedErrors = errors.error.flatten().fieldErrors;
      const formattedErrors: Record<string, string> = {};
      
      for (const key in flattenedErrors) {
        if (flattenedErrors[key as keyof typeof flattenedErrors] ) {
          formattedErrors[key] = flattenedErrors[key as keyof typeof flattenedErrors]![0];
        }
      }

//       for (const key in flattenedErrors) {
//   const typedKey = key as keyof typeof flattenedErrors;
//   const value = flattenedErrors[typedKey];

//   if (value && value.length > 0) {
//     formattedErrors[typedKey] = value[0];
//   }
// }
      
      
      setError(formattedErrors);
         }

    //  debugger
     console.log(username,email)
     console.log("Errors with name and message -->> ",error)
   
     //  console.log("Errors with name and message -->> ",errors.error?.flatten().fieldErrors)

//      const convertToBase64 = (file: File): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();

//     reader.readAsDataURL(file); // 👈 converts to base64

//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = (error) => reject(error);
//   });
// };

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//   const file = e.target.files?.[0];

//   if (!file) return;

//   const base64 = await convertToBase64(file);

//   console.log(base64);
// };

  }
   

  return (
    <>
    {/* main container */}
      <div className="card justify-between w-screen h-screen flex flex-col overflow-hidden">
       
       {/* generate form with two inputs */}        
       <form onSubmit={handleFormSubmit}  className="flex flex-col gap-4 p-8 max-w-md mx-auto border rounded-lg mt-[35vh] shadow-md">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="username" className="text-sm font-medium">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Enter username" 
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter email" 
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
        

      </div>
    </>
  );
}

export default App;
