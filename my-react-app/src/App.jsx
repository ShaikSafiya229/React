function app(){
  const name="Birds";
  let num1=32;
  let num2=12;
  let num=num1+num2;
  let age=18;
  let userage=20;
  return (
    <>
    <h2 style={{color:"blue",backgroundColor:"pink"}}>Page for {name}</h2>
    <div style={{display:"flex"}}>
    <img style={{width:"200px"}}src="https://i.pinimg.com/236x/46/78/c2/4678c25fbdf394b37e7e313c23ba4d1e.jpg"
    alt="Birds"/>
    <p classname="Avian" style={{color:"white"}}> (class Aves) are warm-blooded vertebrates characterized by feathers,
      toothless beaked jaws, the laying of hard-shelled eggs, and a lightweight yet strong skeleton.
      As Earth's only animals with feathers, there are over<b> {num} </b>living species globally, ranging from the tiny bee hummingbird to the flightless ostrich.
      Defining CharacteristicsFeathers: Evolved from reptilian scales, feathers provide insulation, enable flight, and aid in courtship displays.Wings: Forelimbs modified into wings allow most species to fly,
      though some (like penguins, ostriches, and kiwis) have evolved to be flightless</p>
    </div>
    {
      (userage>age)?<p style={{color:"green"}}>User Logged in</p>:
      <p style={{color:"red"}}>Invalid age</p>
    }
    <button onDoubleClick={()=>{
      alert("warning⚠️");
    }} style={{width:"fit-content",color:"red"}}>Danger</button>
    </>

  );

}
export default app;