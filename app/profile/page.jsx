
import UpdateProfileForm  from '../../components/UpdateProfileForm';
import  SelectCountry  from '../..//components/SelectCountry';
export const metadata = {
  title: "Update profile",
};

export default async function Page() {


  return (
    <div>
      <h1 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h1>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm>
       <SelectCountry
         name="nationality"
         id="nationality"
         className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        //  defaultCountry={nationality}
        />

      </UpdateProfileForm>


    </div>
  );
}