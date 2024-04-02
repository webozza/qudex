import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";

const SignUp = () => {
  const charAnim = useRef();
  const wordAnim = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
    getValues, // Access getValues from useForm
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <div className="register-wrapper">
        <div className="row register__btm">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
            <div className="register__info">
              <p ref={wordAnim}>The QUDEX PLATFORM can also be a valuable resource for conservation organizations and researchers, allowing them to track and monitor land regeneration efforts and the impact on biodiversity and ecosystem health. It will leverage your networks and provide user engagement .</p>
              <h5 ref={wordAnim} className="signup-today">
                SIGN UP TODAY.
              </h5>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
            <div className="register__form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-12">
                    <Controller name="name" control={control} defaultValue="" rules={{ required: "Full Name is required" }} render={({ field }) => <input {...field} type="text" placeholder="Full Name" />} />
                    {errors.name && <span>{errors.name.message}</span>}
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <Controller name="email" control={control} defaultValue="" rules={{ required: "Email is required" }} render={({ field }) => <input {...field} type="email" placeholder="Email" />} />
                    {errors.email && <span>{errors.email.message}</span>}
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <Controller name="phone" control={control} defaultValue="" render={({ field }) => <input {...field} type="tel" placeholder="Phone" />} />
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <Controller name="password" control={control} rules={{ required: "Password is required" }} render={({ field }) => <input {...field} type="password" placeholder="Password" />} />

                    {errors.password && <span>{errors.password.message}</span>}
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <Controller
                      name="confirmPassword"
                      control={control}
                      // defaultValue=""
                      rules={{
                        required: "Confirm Password is required",
                        validate: (value) => value === getValues("password") || "Passwords do not match",
                      }}
                      render={({ field }) => <input {...field} type="password" defaultValue="" placeholder="Confirm Password" />}
                    />
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                  </div>
                </div>
                <div>
                  <small>
                    Already have an account? Please <Link href="/login">Sign In</Link>
                  </small>
                </div>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="btn_wrapper">
                      <button className="wc-btn-primary btn-hover btn-item" type="submit" disabled={!isDirty}>
                        <span></span> Register <br />
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
