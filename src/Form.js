import React, {useState} from "react";
import {useForm} from "react-hook-form";
import './Form.css';


function Form() {
    const {handleSubmit,  formState: {errors}, register, watch} = useForm();
    const [click, setClick] = useState(false);

    const {firstName, setFirstName} = useState('');
    const {lastName, setLastName} = useState('');

    //const selectedFrequency = watch('frequency');

    function onFormSubmit(data) {
        /*
                e.preventDefault();
        */
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <ul>
                <li>
                    <label htmlFor={"first-name"}>
                        Voornaam:
                        <input
                            className={"input"}
                            id={"first-name"}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            {...register(
                                "first-name", {
                                    required: {
                                        value: true,
                                        message: 'verplicht!',
                                    }

                                })
                            }/>
                        {errors.name && <p className={"errors"}>{errors.name.message}</p>}
                    </label>

                </li>
                <li>
                    <label htmlFor={"last-name"}>
                        Achternaam:
                        <input
                            className={"input"}
                            id={"last-name"}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            {...register(
                                "last-name", {
                                    required: {
                                        value: true,
                                        message: 'verplicht!',
                                    }
                                })
                            }/>
                        {errors.name && <p className={"errors"}>{errors.name.message}</p>}
                    </label>

                </li>
                <li>
                    <label htmlFor={"age"}>
                        Leeftijd:
                    </label>
                    <input className={"input"} name={"age"} type={"number"} min={18} placeholder={"minimaal 18 of ouder"} {...register("age")}/>
                </li>
                <li>
                    <label htmlFor={"zipcode"}>
                        Postcode:
                    </label>
                    <input className={"input"} name={"zipcode"} {...register("postal-code")}/>
                </li>
            </ul>

            <h3>Bezorgfrequentie</h3>
            <ul>
                <li>
                    <input type={"radio"} name={'frequency'} value={"Iedere week"}{...register("checked")}/><label htmlFor={"radio1"}>Iedere week</label>
                </li>
                <li>
                    <input type={"radio"} name={'frequency'} value={"om de week"}{...register("checked")} /><label htmlFor={"radio2"}>Om de week</label>
                </li>
                <li>
                    <input type={"radio"} name={'frequency'} value={"Iedere maand"}{...register("checked")} /><label htmlFor={"radio3"}>Iedere maand</label>
                </li>
                <li>
                    <input type={"radio"} name={'frequency'} id={"radio4"} value={"Anders"} {...register("checked")}/>

                    <label htmlFor={"radio4"}>Anders</label>
                </li>
            </ul>
            {{/*selectedFrequency === 'anders'  && (
                <input
                    type={"text"}
                    {...register(
                        'found-through-anders',
                        {required: true})}
                />
            )*/}}

            <label htmlFor={"message"}>
                <p>Opmerking:</p>
                <textarea name={"message"} placeholder={"OK"} cols={45}>

                </textarea>
            </label>

            <section>
                <input onClick={()=> setClick(!click)} name={"form-check"} type={"checkbox"}  />
                <label htmlFor={"form-check"}>
                    Ik ga akkoord met de voorwaarden.
                </label>
            </section>
            <input type="submit" className={"verzend"} value={"verzend"} />
        </form>
    );
}

export default Form;