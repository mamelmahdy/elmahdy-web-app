import React from 'react';

function Projects() {

  return (
    <section className="Projects">
      <div className="Project">
        <img src={require('../img/edema.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Edema Monitor</p>
      </div>

      <div className="Project">
        <img src={require('../img/counted.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Medication Adherence</p>
      </div>

      <div className="Project">
        <img src={require('../img/hanger.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Activity Monitoring Prosthetic</p>
      </div>

      <div className="Project">
        <img src={require('../img/dampener.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Neonatal Incubator Dampener</p>
      </div>

      <div className="Project">
        <img src={require('../img/independentLiving.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Independent Living Lab</p>
      </div>

      <div className="Project">
        <img src={require('../img/insoleGait.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Gait Analysis Insole</p>
      </div>

      <div className="Project">
        <img src={require('../img/intelligentImplants.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Smart Spinal Implant Mobile App</p>
      </div>

      <div className="Project">
        <img src={require('../img/vertecore.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Mobile Spinal Decompression</p>
      </div>

      <div className="Project">
        <img src={require('../img/medCooler.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Medical Inventory Tracker</p>
      </div>

      <div className="Project">
        <img src={require('../img/mriLines.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">MRI Fluid Line Guide</p>
      </div>

      <div className="Project">
        <img src={require('../img/nihonKohden.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Mobile Bedside Monitor</p>
      </div>

      <div className="Project">
        <img src={require('../img/venostent.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Modeling Anastamosis Support</p>
      </div>

      <div className="Project">
        <img src={require('../img/pfizer.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Remote Infusion Pump</p>
      </div>

      <div className="Project">
        <img src={require('../img/vitls.png')} className="ProjectImg"
          alt="logo"/>
        <p className="ProjectTitle">Pediatric Vitals Wearable</p>
      </div>
    </section>
  );
}

export default Projects;
