function PropsPractice() {
    
    return (
      <div>
        <CompaniEmployee salary={9000} position="Senior SDE" company="Amazon" />
        <CompaniEmployee salary={12000} position="Junir SDE" company="Goole" />
        <CompaniEmployee
          salary={10000}
          position="Manager SDE"
          company="NetFlix"
        />
      </div>
    );

}


const CompaniEmployee = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default PropsPractice;