import React, { ChangeEvent, useState } from "react";
import HeaderMenu from "../Menu/HeaderMenu";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import classNames from "classnames";
import { GetUserDataService } from "../../services/GetUserDataService";
import Select from "react-select";
import { UserProject } from "../../models/UserProject";
const threeStreak = require("../../images/ednowrimo/3 streak.png");
const fiveStreak = require("../../images/ednowrimo/5 streak.png");
const fifteenStreak = require("../../images/ednowrimo/15 streak.png");
const fullStreak = require("../../images/ednowrimo/Full streak.png");
const fivekwords = require("../../images/ednowrimo/5k words.png");
const tenkwords = require("../../images/ednowrimo/10k words.png");
const twentyfivekwords = require("../../images/ednowrimo/25k words.png");
const fiftykwords = require("../../images/ednowrimo/50k words.png");
const firstwords = require("../../images/ednowrimo/First Words.png");

function EdNoWriMo() {
  const [projectSelectorOpen, setProjectSelectorOpen] = useState(false);
  const getUserDataService = new GetUserDataService();
  const userData = getUserDataService.getUserData();
  const latestProject = userData.projects.sort(
    (a, b) => a.endDate.getDate() - b.endDate.getDate()
  )[0];
  const currentDay = new Date().getDate();
  const [selectedProject, setSelectedProject] = useState(latestProject);
  const [dailyInput, setDailyInput] = useState(selectedProject.dailyInputs);
  const [target, setTarget] = useState(selectedProject.target);
  const [dailyTarget, setDailyTarget] = useState(target / 30);
  const maxNumber = () => {
    return dailyInput.reduce((a, b) => Math.max(a ?? 0, b ?? 0)) ?? 0;
  };

  const data = dailyInput.map((value, index) => ({
    name: index,
    Target: dailyTarget * index,
    Actual: value,
    Projection: selectedProject.maxWords / (currentDay / index),
  }));

  const updateTarget = (e: ChangeEvent<HTMLInputElement>) => {
    setTarget(e.currentTarget.valueAsNumber);
    setDailyTarget(e.currentTarget.valueAsNumber / 30);
  };

  const updateProgress = (index: number, value: number) => {
    const dailyArray = dailyInput;
    if (value < maxNumber()) {
      value = maxNumber();
    }
    dailyArray[index] = value;
    setDailyInput(dailyArray);
  };

  const updateProject = (project: UserProject) => {
    setSelectedProject(project);
    setDailyInput(selectedProject.dailyInputs);
    setTarget(selectedProject.target);
    setDailyTarget(target / 30);
  };

  return (
    <div className="App">
      <HeaderMenu />
      <div className="endowrimo-page">
        <div>
          <h2>{selectedProject.name}</h2>
          <button
            hidden={userData.projects.length < 2}
            onClick={() => setProjectSelectorOpen(true)}
          >
            Change Project
          </button>
        </div>
        <div className="stats">
          <div className="stat-block">
            <p>My goal:</p>
            <p className="score-percent">{target.toLocaleString()}</p>
            <p className="score-percent-plus">words</p>
          </div>
          <div className="stat-block">
            <p>My current streak:</p>
            <p className="score">{selectedProject.currentStreak} days</p>
          </div>
          <div className="stat-block">
            <p>My top streak:</p>
            <p className="score">{selectedProject.maxStreak} days</p>
          </div>
          <div className="stat-block">
            <p>Most daily words:</p>
            <p className="score">
              {selectedProject.maxWordsDaily.toLocaleString()}
            </p>
          </div>
          <div className="stat-block">
            <p>My current word count:</p>
            <p className="score">{selectedProject.maxWords.toLocaleString()}</p>
          </div>
          <div className="stat-block">
            <p>I am:</p>
            <p className="score-percent">
              {Math.round((selectedProject.maxWords / target) * 100)}%
            </p>
            <p className="score-percent-plus">of the way there!</p>
          </div>
        </div>
        <LineChart width={900} height={450} data={data}>
          <XAxis dataKey="name" interval={0} tickLine={false} />
          <YAxis tickCount={6} />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Target" stroke="#8884d8" />
          <Line type="monotone" dataKey="Actual" stroke="#82ca9d" />
          <Line
            type="monotone"
            dataKey="Projection"
            stroke="#82ca9d50"
            strokeDasharray={11}
            dot={false}
          />
        </LineChart>
        <div>
          <h3>Your Target</h3>
          <input type="number" placeholder="20000" onChange={updateTarget} />
        </div>
        <div className="progress">
          <h3 className="progress-header">Your Progress</h3>
          {dailyInput.map((element: number | null, index: number) => {
            if (index > 0) {
              return (
                <div
                  key={index}
                  className={classNames(
                    "day-input",
                    currentDay === index ? "today" : "",
                    index < currentDay ? "past" : ""
                  )}
                >
                  <h4>Day {index}</h4>
                  <input
                    type="number"
                    placeholder={(element ?? "").toString()}
                    disabled={currentDay < index || currentDay > index}
                    onChange={(event) =>
                      updateProgress(index, event.target.valueAsNumber)
                    }
                  />
                </div>
              );
            } else return null;
          })}
        </div>
        <div className="awards">
          <h3>Your Awards</h3>
          {selectedProject.maxWords > 0 && (
            <img alt="first words" src={firstwords} />
          )}
          {selectedProject.maxStreak > 3 && (
            <img alt="three streak" src={threeStreak} />
          )}
          {selectedProject.maxStreak > 5 && (
            <img alt="five streak" src={fiveStreak} />
          )}
          {selectedProject.maxStreak > 15 && (
            <img alt="fifteen streak" src={fifteenStreak} />
          )}
          {selectedProject.maxStreak > 29 && (
            <img alt="full streak" src={fullStreak} />
          )}
          {selectedProject.maxWords > 5000 && (
            <img alt="5k words written" src={fivekwords} />
          )}
          {selectedProject.maxWords > 10000 && (
            <img alt="10k words written" src={tenkwords} />
          )}
          {selectedProject.maxWords > 25000 && (
            <img alt="25k words written" src={twentyfivekwords} />
          )}
          {selectedProject.maxWords > 49000 && (
            <img alt="50k words written" src={fiftykwords} />
          )}
        </div>
        <div
          className={classNames(
            "project-selector",
            projectSelectorOpen ? "selector-open" : ""
          )}
        >
          <Select
            className="select-dropdown"
            options={userData.projects}
            onChange={(value) => updateProject(value ?? latestProject)}
            getOptionLabel={(value) => value.name}
          ></Select>
          <button onClick={() => setProjectSelectorOpen(false)}>x</button>
        </div>
      </div>
    </div>
  );
}

export default EdNoWriMo;
