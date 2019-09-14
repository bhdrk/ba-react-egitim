import React, {useState} from 'react'
import {withRouter} from "react-router";
import AppLayout from "../../AppLayout";
import './RegisterPage.css'
import {Api} from "../../services/api";

function RegisterPage({history, match}) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        channel: '',
        hoby: [],
        deal: ''
    });

    const onInputChange = (e) => {
        const target = e.target;
        setFormData(function (state) {
            return {
                ...state,
                [target.name]: target.value
            }
        })
    };

    const onCheckboxChange = (e) => {
        const target = e.target;
        setFormData(function (state) {
            return {
                ...state,
                [target.name]: target.checked
            }
        })
    };

    const onMultiCheckboxChange = (e) => {
        const target = e.target;
        setFormData(function (state) {
            let selections = state[target.name];

            if (!selections) {
                selections = []
            }

            let index = selections.indexOf(target.value);

            if (target.checked) {
                if (index === -1) {
                    selections = [
                        ...selections,
                        target.value
                    ]
                }
            } else {
                if (index > -1) {
                    selections.splice(index, 1)
                }
            }
            return {
                ...state,
                [target.name]: selections
            }
        })
    };

    const onButtonClick = () => {
        Api.register(formData)
            .then(() => {
                alert('Kayıt işlemi başarıyla gerçekleşti.');
                history.push('/list')
            })
    };

    return (
        <AppLayout>

            <div className="registerForm">
                <div>
                    <h1>ÜYE KAYIT FORMU</h1>
                </div>
                <div>
                    <label>İsim:</label>
                    <input type="text"
                           name="firstName"
                           value={formData.firstName}
                           onChange={onInputChange}/>
                </div>

                <div>
                    <label>Soyisim:</label>
                    <input type="text"
                           name="lastName"
                           value={formData.lastName}
                           onChange={onInputChange}/>
                </div>

                <div>
                    <label>Email:</label>
                    <input type="text"
                           name="email"
                           value={formData.email}
                           onChange={onInputChange}/>
                </div>

                <div>
                    <label>Bizi nereden duydunuz?:</label>
                    <select name="channel" onChange={onInputChange}>
                        <option value="">--- SEÇİNİZ ---</option>
                        <option value="1">İnternetten</option>
                        <option value="2">Reklamlardan</option>
                        <option value="3">Arkadaş Tavsiyesi</option>
                    </select>
                </div>

                <div>
                    <label>Cinsiyet:</label>
                    <input type="radio"
                           name="gender"
                           value="ERKEK"
                           checked={formData.gender === 'ERKEK'}
                           onChange={onInputChange}/> Erkek

                    <input type="radio"
                           name="gender"
                           value="KADIN"
                           checked={formData.gender === 'KADIN'}
                           onChange={onInputChange}/> Kadın
                </div>

                <div>
                    <label>İlgi Alanları</label>

                    <input type="checkbox"
                           name="hoby"
                           value="elektronik"
                           checked={formData.hoby && formData.hoby.includes('elektronik')}
                           onChange={onMultiCheckboxChange}/> ELEKTRONİK

                    <input type="checkbox"
                           name="hoby"
                           value="kozmetik"
                           checked={formData.hoby && formData.hoby.includes('kozmetik')}
                           onChange={onMultiCheckboxChange}/> KOZMETİK

                    <input type="checkbox"
                           name="hoby"
                           value="mobilya"
                           checked={formData.hoby && formData.hoby.includes('mobilya')}
                           onChange={onMultiCheckboxChange}/> MOBİLYA

                    <input type="checkbox"
                           name="hoby"
                           value="yemek"
                           checked={formData.hoby && formData.hoby.includes('yemek')}
                           onChange={onMultiCheckboxChange}/> YEMEK
                </div>

                <div>
                    <label>Üyelin sözleşmesini onaylıyorum.</label>
                    <input type="checkbox"
                           name="deal"
                           value="yes"
                           checked={formData.deal}
                           onChange={onCheckboxChange}/>
                </div>

                <div>
                    <button onClick={onButtonClick}>KAYIT OL</button>
                </div>
            </div>
        </AppLayout>
    )
}

export default withRouter(RegisterPage);
