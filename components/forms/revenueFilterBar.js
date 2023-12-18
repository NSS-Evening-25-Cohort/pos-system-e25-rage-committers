import renderToDOM from '../../utils/renderToDom';

const revenueFilterBar = () => {
  const formContainer = `
       <form id="revenue-filter-bar-form" class="revenue-filter-bar-style">
          <div id="year-container"></div>
          <div id="month-container"></div>
          <div id="day-container"></div>
          </div>
          <div class="submit-button-revenue-container">
            <button type="submit" class="btn btn-secondary">Filter</button>
          </div>
        </form>`;
  renderToDOM('#rev-filter-bar', formContainer);

  const yearSelect = `
        <div><label for="year">Year</label></div>
        <input type="number" id="year" min="1900" max="2100" name="year" required/>
        `;
  renderToDOM('#year-container', yearSelect);

  const monthSelect = `
    <div><label for="months">Month</label></div>
     <select id="month" name="" /required'}>
      <option value="">month</option>
      <option value="01">Jan</option>
      <option value="02">Feb</option>
      <option value="03">March</option>
      <option value="04">April</option>
      <option value="05">May</option>
      <option value="06">June</option>
      <option value="07">July</option>
      <option value="08">August</option>
      <option value="09">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
     </select>`;
  renderToDOM('#month-container', monthSelect);

  const daySelect = `
  <div><label for="day">Day</label></div>
  <select id="day" name="day">
    <option value="">day</option>
    <option value="01">1</option>
    <option value="02">2</option>
    <option value="03">3</option>
    <option value="04">4</option>
    <option value="05">5</option>
    <option value="06">6</option>
    <option value="07">7</option>
    <option value="08">8</option>
    <option value="09">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
  </select>`;

  renderToDOM('#day-container', daySelect);

  document.getElementById('view').addEventListener('click', () => {
    if (document.getElementById('day').value) {
      document.getElementById('month').setAttribute('required', true);
    }
  });
};

export default revenueFilterBar;
