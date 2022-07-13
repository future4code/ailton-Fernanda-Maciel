import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTripPage() {
  const [tripName, setTripName] = useState("");
  const [planeta, setPlaneta] = useState([]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onChangeNomeViagem = (event) => {
    setTripName(event.target.value);
  };

  const onChangePlaneta = (event) => {
    setPlaneta(event.target.value);
  };

  return (
    <div>
      <h1>Criar Viagem</h1>
      <form>
        <input
          placeholder="nome"
          type="text"
          value={tripName}
          onChange={onChangeNomeViagem}
        />
        <select placeholder="Planeta" name="planet" required="">
          <option
            onChange={onChangePlaneta}
            value={planeta}
            disabled=""
            selected=""
          >
            Escolha um Planeta
          </option>
          <option value={planeta}>Mercúrio</option>
          <option value={planeta}>Vênus</option>
          <option value={planeta}>Terra</option>
          <option value={planeta}>Marte</option>
          <option value={planeta}>Jupiter</option>
          <option value={planeta}>Saturno</option>
          <option value={planeta}>Urano</option>
          <option value={planeta}>Netuno</option>
          <option value={planeta}>Plutão</option>
        </select>
        <input
          placeholder="Data"
          type="date"
          name="date"
          required=""
          min="2022-07-13"
          value=""
        />
        <input
          placeholder="Descrição"
          name="description"
          required=""
          pattern="^.{30,}$"
          title="O nome deve ter no mínimo 30 caracteres"
          value=""
        />
        <input
          placeholder="Duração em dias"
          type="number"
          name="durationInDays"
          required=""
          min="50"
          value=""
        ></input>
      </form>

      <div>
        <button onClick={goBack}>Voltar</button>
        <button>Criar</button>
      </div>
    </div>
  );
}

export default CreateTripPage;
