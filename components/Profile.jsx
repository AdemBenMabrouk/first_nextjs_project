import Promptcard from "./Promptcard"

const Profile = ({name,desc,data,handleedit,handledelete}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span> </h1>
        <p className="desc text-left">
          {desc}
        </p>
        <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <Promptcard
          key={post._id}
          post={post}
          handleedit={()=> handleedit && handleedit(post)}
          handledelete={()=> handledelete && handledelete(post)}
        />
      ))}
    </div>
    </section>
  )
}

export default Profile