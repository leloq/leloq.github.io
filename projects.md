---
layout: page
title: Projects
permalink: /projects/
---

<style>
  .project-card {
    display: flex;
    gap: 30px;
    align-items: flex-start;
    margin-bottom: 40px;
  }
  
  .project-image {
    flex-shrink: 0;
    width: 280px;
  }
  
  .project-image img {
    width: 100%;
    border-radius: 4px;
  }
  
  .project-content {
    flex: 1;
  }
  
  .project-content h3 {
    margin-top: 0;
  }
  
  .project-links {
    display: flex;
    gap: 12px;
    margin-top: 12px;
    flex-wrap: wrap;
  }
  
  .project-links a {
    display: inline-block;
    padding: 6px 12px;
    border: 1px solid #ccc;
    text-decoration: none;
    border-radius: 3px;
    font-size: 0.95em;
  }
  
  .project-links a:hover {
    background: #f0f0f0;
  }
  
  .project-note {
    background: #f5f5f5;
    padding: 10px;
    margin-top: 12px;
    font-size: 0.95em;
    border-radius: 3px;
  }
  
  /* Mobile */
  @media (max-width: 768px) {
    .project-card {
      flex-direction: column;
      gap: 20px;
    }
    
    .project-image {
      width: 100%;
    }
  }
</style>

## Projects & Tools

Open-source projects and tools for energy research and smart grid applications.

---

<div class="project-card">
  <div class="project-image">
    <img src="/assets/images/heatpumpninja.png" alt="Heatpump.Ninja">
  </div>

  <div class="project-content">
    <h3>Heatpump.Ninja</h3>

    <p>Heatpump.ninja enables the synthetic generation of heat pump load profiles for different geographies and respective temperature profiles. The approach is based on high-quality heat pump load profiles from Hamelin, Germany, and uses a k-means clustering based approach for the creation of synthetic profiles.</p>
    
    <div class="project-links">
      <a href="https://github.com/leloq/synthetic-heat-pump-load-profile-generator" target="_blank">GitHub</a>
      <a href="https://energyinformatics.springeropen.com/articles/10.1186/s42162-023-00284-1" target="_blank">Publication</a>
    </div>
  </div>
</div>

---

<div class="project-card">
  <div class="project-image">
    <img src="/assets/images/forecastingtransformer.jpg" alt="Transformer Forecasting">
  </div>

  <div class="project-content">
    <h3>Transformer-based forecasting of day-ahead heat pump loads</h3>

    <p>We show that Transformer models outperform other neural network-based models and traditional approaches like XGBoost and Random Forests, when heat pumps are installed in energy communities. However, as long as this is not the case, XGBoost and Random Forest models do not do a significantly worse job and perform well and are, given their computational efficiency, a more sustainable option.</p>
    
    <div class="project-links">
      <a href="https://github.com/leloq/load-forecasting-with-heatpumps" target="_blank">GitHub</a>
      <a href="https://www.sciencedirect.com/science/article/pii/S0306261924007475" target="_blank">Publication</a>
    </div>
  </div>
</div>

---

<div class="project-card">
  <div class="project-image">
    <img src="/assets/images/idtrading.png" alt="Intraday Trading">
  </div>

  <div class="project-content">
    <h3>Rolling Intrinsic Intraday Energy Trading Optimization</h3>

    <p>The Rolling Intrinsic Intraday Energy Trading Optimization repository models continous intraday trading with the means of discretization and linear optimization. While the results of the underlying paper are based on actual EPEX Spot data, the open-source repository at hand provides randomly generated data.</p>
    
    <div class="project-links">
      <a href="https://github.com/leloq/Rolling-Intrinsic-BESS-Intraday-Trading" target="_blank">GitHub</a>
      <a href="https://dl.acm.org/doi/abs/10.1145/3717413.3717428" target="_blank">Publication</a>
    </div>
  </div>
</div>

---

<div class="project-card">
  <div class="project-image">
    <img src="/assets/images/eenergy25-7-fig3.jpg" alt="Dynamic Tariffs Framework">
  </div>

  <div class="project-content">
    <h3>A framework to analyze the impact of dynamic tariff adoption and regulatory options on distribution grid reinforcement</h3>

    <p>The repository provides an open-source framework to analyze the impact of dynamic tariffs and regulatory options on distribution grid reinforcement costs. It includes tools to simulate the operation of household home energy management systems, create load profiles under constant and dynamic tariff adoption, calculate grid reinforcement costs based on PyPSA power flow simulations and the eDisGO package, and visualize results.</p>
    
    <div class="project-links">
      <a href="https://github.com/leloq/dynamic-tariffs-in-distribution-grids?tab=readme-ov-file" target="_blank">GitHub</a>
      <a href="https://dl.acm.org/doi/10.1145/3679240.3734590" target="_blank">Publication</a>
    </div>
  </div>
</div>

---

<div class="project-card">
  <div class="project-image">
    <img src="/assets/images/eenergy25-48-fig3.jpg" alt="BessBidder">
  </div>

  <div class="project-content">
    <h3>BessBidder: Multi-Market Battery Bidding for Continous Intraday and Day-ahead Market</h3>

    <p>We publish an open-source, implementable framework for multi-market bidding under uncertainty designed to increase the profitability of energy storage systems through enhanced coordination. Specifically, we consider two spot markets: the day-ahead market and continuous intraday trading.</p>
    
    <div class="project-links">
      <a href="https://github.com/kim-mskw/BessBidder" target="_blank">GitHub</a>
      <a href="https://dl.acm.org/doi/full/10.1145/3679240.3734631" target="_blank">Publication</a>
    </div>
    
    <div class="project-note">
      This project is led by my colleague Kim K. Miskiw, and I am just a contributor here. I included it here, since it is a great source to get involved with the difficult problem of multi-market bidding on the day-ahead and continuous intraday market.
    </div>
  </div>
</div>