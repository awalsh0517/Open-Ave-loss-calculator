CREATE DATABASE openAve;

CREATE USER "openAve"@"localhost" IDENTIFIED BY "C0$tL0$$C4lc";

GRANT ALL ON openAve.* TO "openAve"@"localhost";

USE openAve;

CREATE TABLE avgSigningBonuses (
  id INT auto_increment,
  companyName VARCHAR(255),
  cost INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE averageRecruiterFees (
  id INT auto_increment,
  majorDiscipline VARCHAR(255),
  avgFeePercent DECIMAL(3,2),
  avgSalary INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE jobPostingFees (
  id INT auto_increment,
  service VARCHAR(255),
  cost INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE OAFProgramPricings (
  id INT auto_increment,
  feeName VARCHAR(255),
  feeValue INT,
  feeRecurrsions INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE miscFixedCosts (
  id INT auto_increment,
  name VARCHAR(255),
  cost INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE miscVariableCosts (
  id INT auto_increment,
  name VARCHAR(255),
  percentCost DECIMAL(3,2),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE userInputs (
  id INT auto_increment,
  userEmail VARCHAR(255),
  userFullName VARCHAR(255),
  timePeriodStart DATE,
  timePeriodEnd DATE,
  companyIndustry VARCHAR(255),
  EIROccSpec VARCHAR(255) DEFAULT NULL,
  EIRJobTitle VARCHAR(255) DEFAULT NULL,
  laborNAICSCode VARCHAR(255) DEFAULT NULL,
  DOLAnnualSalary DECIMAL(8,2),
  DOLHourlySalary DECIMAL(6,2) DEFAULT NULL,
  weeklyHours INT,
  OESSOCCode VARCHAR(255) DEFAULT NULL,
  EIRDegree VARCHAR(255) DEFAULT NULL,
  averageDaysVacant INT,
  isExternalRecruiterUsed TINYINT DEFAULT NULL,
  isOfferedSigningBonus TINYINT DEFAULT NULL,
  isOfferedRelocationBonus TINYINT DEFAULT NULL,
  isCorpRecuiterInvolved TINYINT DEFAULT NULL,
  isDirOfEngineeringInvolved TINYINT DEFAULT NULL,
  isItTechnicianInvolved TINYINT DEFAULT NULL,
  isHrManagerInvolved TINYINT DEFAULT NULL,
  isCeoInvolved TINYINT DEFAULT NULL,
  isPeerWorkerInvolved TINYINT DEFAULT NULL,
  estUnemployTaxInc DECIMAL(7,2) DEFAULT NULL,
  possibleLegalClaimsCost DECIMAL(9,2) DEFAULT NULL,
  staffMorale DECIMAL(9,2) DEFAULT NULL,
  lostCustomers DECIMAL(9,2) DEFAULT NULL,
  travelAndRegFees DECIMAL(7,2) DEFAULT NULL,
  outsideTrainerCost DECIMAL(7,2) DEFAULT NULL,
  outsourcedWork DECIMAL(7,2) DEFAULT NULL,
  workShopMaterialCost DECIMAL(7,2) DEFAULT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE salaries (
  id INT auto_increment,
  title VARCHAR(255),
  hourlyRate DECIMAL(6,2),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE internalPersonnelTasks (
  id INT auto_increment,
  taskGroup ENUM("Exit", "RnH", "OnBoarding"),
  name VARCHAR(255) NOT NULL,
  hoursSpent INT,
  titleID INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME,
  PRIMARY KEY (id),
  FOREIGN KEY (titleID) REFERENCES salaries(id)
);

INSERT INTO OAFProgramPricings (feeName, FeeValue, FeeRecurrsions) VALUES  ("Legal", 5710, 1);
INSERT INTO OAFProgramPricings (feeName, FeeValue, FeeRecurrsions) VALUES  ("Programmtic", 1300, 12);

INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Facebook", 45708);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Amazon", 41340);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Pinterest", 33376);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Dropbox", 32833);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Twitter", 26144);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Salesforce", 28314);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Fitbit", 25459);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Google", 27547);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Apple", 27201);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Airbnb", 23250);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Snap", 23705);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Vmware", 18851);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("LinkedIn", 25418);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Microsoft", 20191);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Pandora", 18886);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Square", 17996);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Arista Network", 18652);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Spotify", 22492);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Tesla Motors", 19447);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Capital One", 8568);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Hewlett Packard Enterprise", 8265);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Oculus VR", 6926);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Uber", 1807);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("Netflix", 2520);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("CSRA", 1186);
INSERT INTO avgSigningBonuses (companyName, cost) VALUES ("UnitedHealth Group", 118);

INSERT INTO miscVariableCosts (name, percentCost) VALUES ("Employee Productivity", 0.15);
INSERT INTO miscVariableCosts (name, percentCost) VALUES ("Vacant Percentage", 0.45);

INSERT INTO miscFixedCosts (name, cost) VALUES ("Average Relocation Bonus", 21000);

INSERT INTO salaries (title, hourlyRate) VALUES ("Corporate Recruiter", 43.75);
INSERT INTO salaries (title, hourlyRate) VALUES ("Director of Engineering - Hiring Manager", 113.85);
INSERT INTO salaries (title, hourlyRate) VALUES ("IT Technician", 10.42);
INSERT INTO salaries (title, hourlyRate) VALUES ("Human Resources Manager", 55.07);
INSERT INTO salaries (title, hourlyRate) VALUES ("CEO, Executives/Decision-Maker", 113.62);
INSERT INTO salaries (title, hourlyRate) VALUES ("Peer Worker - Estimated 3 people", 64.92);

INSERT INTO averageRecruiterFees (majorDiscipline, avgFeePercent, avgSalary) VALUES ("Finance and Banking", 0.21, 166250);
INSERT INTO averageRecruiterFees (majorDiscipline, avgFeePercent, avgSalary) VALUES ("Scientific", 0.20, 127466);
INSERT INTO averageRecruiterFees (majorDiscipline, avgFeePercent, avgSalary) VALUES ("Engineering", 0.23, 105831);
INSERT INTO averageRecruiterFees (majorDiscipline, avgFeePercent, avgSalary) VALUES ("IT/Information Systems/Data Processing", 0.22, 98437);
INSERT INTO averageRecruiterFees (majorDiscipline, avgFeePercent, avgSalary) VALUES ("Sales and Marketing", 0.20, 101485);

INSERT INTO jobPostingFees (service, cost) VALUES ("Jobs.com", 398);
INSERT INTO jobPostingFees (service, cost) VALUES ("Glassdoor", 498);
INSERT INTO jobPostingFees (service, cost) VALUES ("Monster", 399);
INSERT INTO jobPostingFees (service, cost) VALUES ("Career Builder", 398);
INSERT INTO jobPostingFees (service, cost) VALUES ("Simply Hired", NULL);
INSERT INTO jobPostingFees (service, cost) VALUES ("LinkedIn", 990);
INSERT INTO jobPostingFees (service, cost) VALUES ("Dice", 395);
INSERT INTO jobPostingFees (service, cost) VALUES ("SnagAJob", 178);
INSERT INTO jobPostingFees (service, cost) VALUES ("Craigslist", 45);
INSERT INTO jobPostingFees (service, cost) VALUES ("Indeed", 300);
INSERT INTO jobPostingFees (service, cost) VALUES ("Workable", 198);
INSERT INTO jobPostingFees (service, cost) VALUES ("Proven", 203);
INSERT INTO jobPostingFees (service, cost) VALUES ("ZipRecruiter", 178);

INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Position Description", 2, 1);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Posting & Marketing", 5, 1);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Resume Screening", 15, 1);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Internal meetings & Phone Screening", 20, 1);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Position Description", 2, 2);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Interviewing", 24, 2);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("OnBoarding", "Technical Training", 20, 2);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("OnBoarding", "Orientation", 2, 3);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("Exit", "Conducting Exit Interview", 2, 4);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("Exit", "Completing Exit Paperwork", 2, 4);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Position Description", 2, 4);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "References, Background and Certification/ Degree checks", 4, 4);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Interviewing", 12, 4);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Benefits Packages, Relocation Coordination", 2, 4);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("OnBoarding", "Orientation", 5, 4);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Interviewing", 9, 5);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Overtime to Cover Employee Vacancy", 64, 6);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("RnH", "Interviewing", 9, 6);
INSERT INTO internalPersonnelTasks (taskGroup, name, hoursSpent, titleID) VALUES ("OnBoarding", "Technical Training", 30, 6);
