import React from "react";

export default function StudentInput({
  msg,
  countries,
  states,
  cities,
  student: {
    firstName,
    lastName,
    middleName,
    email,
    dob,
    birthPlace,
    lang,
    city,
    stateCode,
    countryCode,
    pin,
    img,
    collegeName,
    collegeLogo,
    referenceDetail,
    referenceThrough,
    addr,
    phone,
    mFirstName,
    mMiddleName,
    mLastName,
    mEmail,
    mQualification,
    mProfession,
    mDesignation,
    mPhone,
    fFirstName,
    fMiddleName,
    fLastName,
    fEmail,
    fQualification,
    fProfession,
    fDesignation,
    fPhone,
  },
  handleChange,
  handleSubmit,
  editItem,
  displayMsg,
}) {
  return (
    <div className="container" id="student-inp">
      <h3 className="text-capitalize display-4">student Registration</h3>
      <div className="card card-body">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h4 className="text-capitalize">student's detail</h4>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="firstName" className="text-capitalize">
                first name
              </label>
              <input
                required={!editItem}
                type="text"
                id="inp"
                value={firstName}
                name="firstName"
                onChange={handleChange}
                className="form-control text-capitalize"
              />
              {displayMsg(msg, "firstName")}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="middleName" className="text-capitalize">
                middle name
              </label>
              <input
                required={!editItem}
                type="text"
                id="inp"
                value={middleName}
                name="middleName"
                onChange={handleChange}
                className="form-control text-capitalize"
              />
              {displayMsg(msg, "middleName")}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="lastName" className="text-capitalize">
                last name
              </label>
              <input
                required={!editItem}
                type="text"
                value={lastName}
                name="lastName"
                onChange={handleChange}
                className="form-control text-capitalize"
              />
              {displayMsg(msg, "lastName")}
            </div>
          </div>
          <div className="form-group">
            <input
              required={!editItem}
              type="email"
              value={email}
              name={`email`}
              onChange={handleChange}
              className="form-control"
              placeholder="enter email"
            />
            {displayMsg(msg, "email")}
          </div>
          <div className="form-group">
            <label htmlFor="dob" className="text-capitalize">
              DOB
            </label>
            <input
              required={!editItem}
              type="date"
              value={dob}
              name="dob"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "dob")}
          </div>
          <div className="form-group">
            <label htmlFor="birthPlace" className="text-capitalize">
              place of birth
            </label>
            <input
              required={!editItem}
              type="text"
              value={birthPlace}
              name="birthPlace"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "birthPlace")}
          </div>
          <div className="form-group">
            <label htmlFor="lang" className="text-capitalize">
              first language
            </label>
            <input
              required={!editItem}
              type="text"
              value={lang}
              name="lang"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "lang")}
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="country">country</label>
              <select
                required={!editItem}
                name="country"
                id="country"
                className="form-control"
                value={countryCode}
                onChange={handleChange}
              >
                {countries.map((cnt) => (
                  <option key={cnt.isoCode} value={cnt.isoCode}>
                    {cnt.name}
                  </option>
                ))}
              </select>
              {displayMsg(msg, "country")}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="state">state</label>
              <select
                required={!editItem}
                name="state"
                id="state"
                className="form-control"
                value={stateCode}
                onChange={handleChange}
              >
                {states.map((st) => (
                  <option key={st.isoCode} value={st.isoCode}>
                    {st.name}
                  </option>
                ))}
              </select>
              {displayMsg(msg, "state")}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="city">city</label>
              <select
                required={!editItem}
                name="city"
                id="city"
                className="form-control"
                value={city}
                onChange={handleChange}
              >
                {cities.map((ct) => (
                  <option key={ct.name} value={ct.name}>
                    {ct.name}
                  </option>
                ))}
              </select>
              {displayMsg(msg, "city")}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="pin" className="text-capitalize">
              pin
            </label>
            <input
              required={!editItem}
              type="number"
              value={pin}
              name="pin"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "pin")}
          </div>

          <div className="form-group">
            <input
              required={!editItem}
              type="file"
              value={img.path ? img.path : ""}
              name="img"
              onChange={handleChange}
              className="form-control text-capitalize"
              placeholder="upload image"
            />
            {displayMsg(msg, "img")}
          </div>
          <div className="form-group">
            <label htmlFor="collegeName" className="text-capitalize">
              college name
            </label>
            <input
              required={!editItem}
              type="text"
              value={collegeName}
              name="collegeName"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "collegeName")}
          </div>
          <div className="form-group">
            <input
              required={!editItem}
              type="file"
              value={collegeLogo.path ? collegeLogo.path : ""}
              name="collegeLogo"
              onChange={handleChange}
              className="form-control text-capitalize"
              placeholder="upload college logo"
            />
            {displayMsg(msg, "collegeLogo")}
          </div>
          <div className="form-group">
            <label htmlFor="referenceDetail" className="text-capitalize">
              reference detail
            </label>
            <input
              required={!editItem}
              type="text"
              value={referenceDetail}
              name="referenceDetail"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "referenceDetail")}
          </div>
          <div className="form-group">
            <label htmlFor="referenceThrough" className="text-capitalize">
              reference through
            </label>
            <input
              required={!editItem}
              type="text"
              value={referenceThrough}
              name="referenceThrough"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "referenceThrough")}
          </div>
          <div className="form-group">
            <label htmlFor="addr" className="text-capitalize">
              Address
            </label>
            <textarea
              required={!editItem}
              value={addr}
              name="addr"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "addr")}
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="text-capitalize">
              phone
            </label>
            <input
              required={!editItem}
              type="number"
              value={phone}
              name="phone"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "phone")}
          </div>
          {/* father's detail */}
          <h4 className="text-capitalize">father's details</h4>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="fFirstName" className="text-capitalize">
                first name
              </label>
              <input
                required={!editItem}
                type="text"
                id="inp"
                value={fFirstName}
                name="fFirstName"
                onChange={handleChange}
                className="form-control text-capitalize"
              />
              {displayMsg(msg, "fFirstName")}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="fMiddleName" className="text-capitalize">
                middle name
              </label>
              <input
                required={!editItem}
                type="text"
                id="inp"
                value={fMiddleName}
                name="fMiddleName"
                onChange={handleChange}
                className="form-control text-capitalize"
              />
              {displayMsg(msg, "fMiddleName")}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="fLastName" className="text-capitalize">
                last name
              </label>
              <input
                required={!editItem}
                type="text"
                value={fLastName}
                name="fLastName"
                onChange={handleChange}
                className="form-control text-capitalize"
              />
              {displayMsg(msg, "fLastName")}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="fEmail" className="text-capitalize">
              email
            </label>
            <input
              required={!editItem}
              type="email"
              value={fEmail}
              name="fEmail"
              onChange={handleChange}
              className="form-control"
            />
            {displayMsg(msg, "fEmail")}
          </div>
          <div className="form-group">
            <label htmlFor="fQualification" className="text-capitalize">
              qualification
            </label>
            <input
              required={!editItem}
              type="text"
              value={fQualification}
              name="fQualification"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "fQualification")}
          </div>
          <div className="form-group">
            <label htmlFor="fProfession" className="text-capitalize">
              profession
            </label>
            <input
              required={!editItem}
              type="text"
              value={fProfession}
              name="fProfession"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "fProfession")}
          </div>
          <div className="form-group">
            <label htmlFor="fDesignation" className="text-capitalize">
              designation
            </label>
            <input
              required={!editItem}
              type="text"
              value={fDesignation}
              name="fDesignation"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "fDesignation")}
          </div>
          <div className="form-group">
            <label htmlFor="fPhone" className="text-capitalize">
              phone
            </label>
            <input
              required={!editItem}
              type="number"
              value={fPhone}
              name="fPhone"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "fPhone")}
          </div>
          {/* mother's detail */}
          <h4 className="text-capitalize">mother's details</h4>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="mFirstName" className="text-capitalize">
                first name
              </label>
              <input
                required={!editItem}
                type="text"
                id="inp"
                value={mFirstName}
                name="mFirstName"
                onChange={handleChange}
                className="form-control text-capitalize"
              />
              {displayMsg(msg, "mFirstName")}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="mMiddleName" className="text-capitalize">
                middle name
              </label>
              <input
                required={!editItem}
                type="text"
                id="inp"
                value={mMiddleName}
                name="mMiddleName"
                onChange={handleChange}
                className="form-control text-capitalize"
              />
              {displayMsg(msg, "mMiddleName")}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="mLastName" className="text-capitalize">
                last name
              </label>
              <input
                required={!editItem}
                type="text"
                value={mLastName}
                name="mLastName"
                onChange={handleChange}
                className="form-control text-capitalize"
              />
              {displayMsg(msg, "mLastName")}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="mEmail" className="text-capitalize">
              email
            </label>
            <input
              required={!editItem}
              type="email"
              value={mEmail}
              name="mEmail"
              onChange={handleChange}
              className="form-control"
            />
            {displayMsg(msg, "mEmail")}
          </div>
          <div className="form-group">
            <label htmlFor="mQualification" className="text-capitalize">
              qualification
            </label>
            <input
              required={!editItem}
              type="text"
              value={mQualification}
              name="mQualification"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "mQualification")}
          </div>
          <div className="form-group">
            <label htmlFor="mProfession" className="text-capitalize">
              profession
            </label>
            <input
              required={!editItem}
              type="text"
              value={mProfession}
              name="mProfession"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "mProfession")}
          </div>
          <div className="form-group">
            <label htmlFor="mDesignation" className="text-capitalize">
              designation
            </label>
            <input
              required={!editItem}
              type="text"
              value={mDesignation}
              name="mDesignation"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "mDesignation")}
          </div>
          <div className="form-group">
            <label htmlFor="mPhone" className="text-capitalize">
              phone
            </label>
            <input
              required={!editItem}
              type="number"
              value={mPhone}
              name="mPhone"
              onChange={handleChange}
              className="form-control text-capitalize"
            />
            {displayMsg(msg, "mPhone")}
          </div>
          <button
            type="submit"
            className={
              editItem ? "btn btn-info btn-block" : "btn btn-primary btn-block"
            }
            disabled={msg.length}
          >
            {editItem ? "edit student" : "add student"}
          </button>
        </form>
      </div>
    </div>
  );
}
