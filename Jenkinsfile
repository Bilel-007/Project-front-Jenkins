pipeline {
    environment {
        scannerHome = tool name: 'sonarqube-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
        registry = "bilel707/project_devops"
        registryCredential = 'Docker_hub'
    }
    agent any
//         docker {
//             image 'node:lts-buster-slim'
//             args '-p 3000:3000'
//         }
    stages {
        stage("test-sonar"){
            steps{
                script {
                    withSonarQubeEnv("sonarQube") {
                        
                    sh "${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=Project-Devops \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://localhost:9000 \
                            -Dsonar.login=c8b2c764943238488fb46caf357927b330c86cbf"
                        
                    
                    } 
                }
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'CI=false npm run build'
            }
        }
        
        stage("docker-build"){
            steps{
                script {
                    dockerImage = docker.build ("projectfront")   
                }
            }
        }
        
        stage("docker-deploy-img"){
            steps{
                script {
                    docker.withRegistry( '', registryCredential ) {
                        docker login -u bilel707 -p ${registryCredential}
                        dockerImage.push('latest')
                        docker logout
                    }
                }
            }
        }
        
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}
