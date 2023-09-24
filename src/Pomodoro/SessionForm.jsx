import { useForm } from "react-hook-form"



function SessionForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = data => console.log(data);

    const date = new Date();

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue={date.toLocaleDateString()} placeholder="Date:" {...register("date", { required: true })} />
            {errors?.date?.type === "required" && <p>When was your session?</p>}

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("duration", { required: true })} placeholder="How long did you practice for?" />

            <input className={"btn btn-active btn-accent"} type="submit" value={"+ Log"}/>
        </form>
    );
}

export default SessionForm;