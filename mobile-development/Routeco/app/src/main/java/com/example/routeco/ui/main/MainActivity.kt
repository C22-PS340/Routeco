package com.example.routeco.ui.main

import com.example.routeco.R
import com.example.routeco.databinding.ActivityMainBinding
import com.google.android.material.bottomnavigation.BottomNavigationView
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.fragment.NavHostFragment
import androidx.navigation.ui.setupWithNavController

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val navView: BottomNavigationView = binding.navigationView

        val navHostFragment =
            supportFragmentManager.findFragmentById(R.id.home_fragment_host) as NavHostFragment
        val navController = navHostFragment.navController
        navView.setupWithNavController(navController)
    }

    companion object {
        const val EXTRA_TOKEN = "extra_token"
    }
}