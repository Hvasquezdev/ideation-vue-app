<template>
  <div class="rating-container">
    <h2 class="rating-message">
      Well done!
    </h2>
    <div class="rating-card">
      <div class="rating-total-ideas-text">
        <h3>
          you produced 17 ideas
        </h3>
        <span>
          4.27 ideas / mn.
        </span>
      </div>
      <div class="rating-calification-field">
        <h3>
          rate the quality of your session
        </h3>
        <!-- TODO selector of calification -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'rating-card'
}
</script>

<style lang="scss">
.rating-container {
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 606px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 100;

  .rating-message {
    font-family: 'Libre Baskerville', serif;
    font-size: 50px;
    color: #fff;
    font-weight: bold;
  }

  .rating-total-ideas-text,
  .rating-calification-field {
    h3,
    span {
      font-family: 'Montserrat', sans-serif !important;
      color: #484848;
      font-size: 25px;
    }

    h3 {
      font-weight: bold;
    }
  }

  .rating-total-ideas-text {
    line-height: 1.2;

    span {
      font-weight: 500;
    }
  }

  .rating-calification-field {
    margin-top: 22px;
  }

  .rating-card {
    background-color: #fff;
    width: 100%;
    height: 290px;
    padding: 56px 36px 36px 36px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  }
}

</style>
