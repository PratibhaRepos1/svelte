<script>
    export let personName;
    export let street;
    export let shortDescription;

</script>
<style>
    .address-card {
    box-shadow: 0 2px 8px rgba(239, 89, 8, 0.26);
    max-width: 30rem;
    border-radius: 5px;
    margin: 1rem 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
  }

  .thumb {
    width: 33%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .person-data {
    width: 67%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
  }

  h1 {
    font-size: 1.25rem;
    font-family: "Roboto Slab", sans-serif;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
    color: #5a5a5a;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .long-text {
    border-top: 1px solid #ccc;
    padding: 1rem;
  }
</style>
<div class="address-card">
    <header>
        <div class="thumb">
            <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80"  alt="noimage">
        </div>
        <div class="person-data">
        <h1>Person Name: {personName}</h1>
        <h2>Address: {street}</h2>
        </div>
    </header>
    <div class="long-text">
        <p>{shortDescription}</p>
    </div>
</div>